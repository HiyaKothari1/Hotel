// Builds a CSS background that shows the photo from /public/images,
// with a gradient underneath so the page still looks good if the photo is missing.
export const photoBg = (file, fallback) =>
  `url(${import.meta.env.BASE_URL}images/${file}), ${fallback}`;
