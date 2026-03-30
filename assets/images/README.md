# Images folder

Put your image files in this folder (for example: `photo.jpg`, `logo.png`, `banner.webp`).

## How to show an image on a page

Use an HTML `<img>` tag and point to the file from the site root:

```html
<img src="/assets/images/photo.jpg" alt="Description of the photo" width="600">
```

- `src`: path to your image file.
- `alt`: short text describing the image (for accessibility).
- `width` (optional): controls display size.

If your page is Markdown, you can also use:

```md
![Description of the photo](/assets/images/photo.jpg)
```
