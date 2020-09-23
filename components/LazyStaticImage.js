
function LazyStaticImage({ srcSet, src, previewSrc, className }) {
  return (
    <img
      className={`lazyload blur-up ${className}`}
      src={previewSrc}
      data-src={srcSet || src}
    />
  );
}

export default LazyStaticImage;
