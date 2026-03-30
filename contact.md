---
layout: page
title: Contact
permalink: /contact/
---

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: flex-start; margin-bottom: 1rem;">
  <img
    src="/assets/images/IMG_0205.JPEG"
    alt="Description of the photo"
    style="width: 280px; max-width: 100%; height: auto; border-radius: 8px;"
  />

  <div style="flex: 1; min-width: 240px;">
    <h3 style="margin-top: 0;">Text Section</h3>
    <p>
      Add your custom text here. This is placeholder content that you can replace
      with a short bio, availability details, or anything else you want to show
      next to your photo.
    </p>
  </div>
</div>

<div class="hero-buttons" style="justify-content: flex-start; margin-bottom: 1rem;">
  <button id="copy-email-button" class="hero-button" type="button" data-email="kalebamartiny@gmail.com">
    <span class="icon">✉️</span> Email
  </button>

  <a class="hero-button" href="https://www.linkedin.com/in/kaleb-martiny/" target="_blank" rel="noopener noreferrer">
    <span class="icon">🔗</span> LinkedIn
  </a>
</div>

<p id="copy-email-status" aria-live="polite"></p>

<p>I am currently seeking aerospace engineering internship opportunities.</p>

<script>
  (function () {
    var copyButton = document.getElementById('copy-email-button');
    var status = document.getElementById('copy-email-status');

    if (!copyButton || !status) {
      return;
    }

    copyButton.addEventListener('click', function () {
      var email = copyButton.getAttribute('data-email');

      if (!navigator.clipboard || !email) {
        status.textContent = 'Unable to copy email automatically. Please copy: ' + email;
        return;
      }

      navigator.clipboard.writeText(email)
        .then(function () {
          status.textContent = 'Email copied to clipboard: ' + email;
        })
        .catch(function () {
          status.textContent = 'Unable to copy email automatically. Please copy: ' + email;
        });
    });
  })();
</script>
