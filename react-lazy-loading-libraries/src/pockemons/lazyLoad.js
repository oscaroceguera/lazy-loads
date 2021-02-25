export const config = {
  rootMargin: "288px",
  threshold: 0.5,
};

function lazyLoadImageCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      entry.target.src = entry.target.dataset.src;
    }
  });
}

export default lazyLoadImageCallback;
