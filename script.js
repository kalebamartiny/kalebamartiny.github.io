document.addEventListener("DOMContentLoaded", () => {
  const theme = new URLSearchParams(window.location.search).get("theme");
  if (["harbor", "canyon"].includes(theme)) {
    document.documentElement.dataset.theme = theme;
  }

  const currentPath = window.location.pathname;
  const currentSection = currentPath.includes("/projects/") ? "projects"
    : currentPath.includes("/coursework/") ? "coursework"
    : currentPath.endsWith("resume.html") ? "resume"
    : currentPath.endsWith("photography.html") ? "photography"
    : "";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const target = new URL(link.href);
    const targetSection = target.hash.slice(1) || (target.pathname.endsWith("resume.html") ? "resume" : target.pathname.endsWith("photography.html") ? "photography" : "");
    if (targetSection === currentSection) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });
  }

  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    const email = button.dataset.copyEmail;
    const originalLabel = button.textContent;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = "Copied - now you have me.";
      } catch {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = email;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand("copy");
        temporaryInput.remove();
        button.textContent = "Copied - now you have me.";
      }
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 2200);
    });
  });

  document.querySelectorAll(".doc-panel").forEach((panel) => {
    const frame = panel.querySelector(".doc-frame");
    const label = panel.querySelector(".doc-frame-label");
    const buttons = panel.querySelectorAll(".doc-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        if (frame) {
          frame.src = button.dataset.docTarget;
          frame.title = button.dataset.docLabel;
        }
        if (label) {
          label.textContent = button.dataset.docLabel;
        }
      });
    });
  });

  const supportsCardTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (supportsCardTilt) {
    document.querySelectorAll(".card-link").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.setProperty("--tilt-x", `${-y * 5}deg`);
        card.style.setProperty("--tilt-y", `${x * 5}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      });
    });
  }

  const imageLightbox = document.querySelector(".image-lightbox");
  if (imageLightbox) {
    const imageLightboxImage = imageLightbox.querySelector(".image-lightbox-image");
    const imageLightboxClose = imageLightbox.querySelector(".image-lightbox-close");
    let imageScrollPosition = 0;
    let activeImage = null;

    const restoreImagePosition = () => {
      requestAnimationFrame(() => window.scrollTo({ top: imageScrollPosition, behavior: "instant" }));
    };

    const openImage = (image) => {
      imageScrollPosition = window.scrollY;
      activeImage = image;
      imageLightboxImage.src = image.dataset.full;
      imageLightboxImage.alt = image.alt;
      imageLightbox.showModal();
      restoreImagePosition();
    };

    document.querySelectorAll("[data-image-open]").forEach((image) => {
      image.addEventListener("click", () => openImage(image));
      image.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openImage(image);
        }
      });
    });

    imageLightboxClose.addEventListener("click", () => imageLightbox.close());
    imageLightbox.addEventListener("close", () => {
      activeImage?.focus({ preventScroll: true });
      restoreImagePosition();
    });
    imageLightbox.addEventListener("click", (event) => {
      if (event.target === imageLightbox) {
        imageLightbox.close();
      }
    });
  }

  const lightbox = document.querySelector(".photo-lightbox");
  if (lightbox) {
    const lightboxImage = lightbox.querySelector(".photo-lightbox-image");
    const lightboxCamera = lightbox.querySelector(".photo-lightbox-camera");
    const lightboxLens = lightbox.querySelector(".photo-lightbox-lens");
    const lightboxDate = lightbox.querySelector(".photo-lightbox-date");
    const closeButton = lightbox.querySelector(".photo-lightbox-close");
    const settingKeys = ["iso", "shutter", "focal", "aperture", "exposure"];
    let galleryScrollPosition = 0;
    let activePhotoTile = null;
    let photoLoadId = 0;

    const restoreGalleryPosition = () => {
      requestAnimationFrame(() => window.scrollTo({ top: galleryScrollPosition, behavior: "instant" }));
    };

    const openPhoto = (tile) => {
        const loadId = ++photoLoadId;
        galleryScrollPosition = window.scrollY;
        activePhotoTile = tile;
        lightboxImage.classList.add("is-loading");
        lightboxImage.removeAttribute("src");
        lightboxImage.alt = "";
        lightboxCamera.textContent = tile.dataset.camera;
        lightboxLens.textContent = tile.dataset.lens;
        lightboxDate.textContent = tile.dataset.date;
        settingKeys.forEach((key) => {
          lightbox.querySelector(`[data-lightbox="${key}"]`).textContent = tile.dataset[key];
        });
        if (!lightbox.open) {
          lightbox.showModal();
        }
        restoreGalleryPosition();
        const nextPhoto = new Image();
        nextPhoto.onload = () => {
          if (loadId !== photoLoadId) return;
          lightboxImage.src = nextPhoto.src;
          lightboxImage.alt = `Expanded photograph captured with ${tile.dataset.camera}`;
          lightboxImage.classList.remove("is-loading");
        };
        nextPhoto.src = tile.dataset.full;
    };

    document.querySelectorAll("[data-photo-open]").forEach((tile) => {
      tile.addEventListener("click", () => openPhoto(tile));
    });

    closeButton.addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("close", () => {
      photoLoadId += 1;
      lightboxImage.classList.add("is-loading");
      lightboxImage.removeAttribute("src");
      activePhotoTile?.focus({ preventScroll: true });
      restoreGalleryPosition();
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target === lightbox.querySelector(".photo-lightbox-layout")) {
        lightbox.close();
      }
    });
  }
});
