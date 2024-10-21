/**
 *
 * <img data-src="some-url.com"/>
 *
 * The data-.... global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts.
 */

// delay the loading of certain resources with this callback
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get the image
      let img = entry.target;
      // Set the URL to be a local file
      img.src = img.dataset.src;
      // Stop observing once image is loaded
      observer.unobserve(img);
    }
  });
}
// "callback" is triggered on a "need" basis
const observer = new IntersectionObserver(callback);
// "asynchronously" observe changes in the intersection of a target element within a viewport
observer.observe(someElement);
