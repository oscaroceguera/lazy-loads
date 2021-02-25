import React from "react";

const Image = ({ src, srcSet, alt, fallbackSrc, isLazy, onClick, style }) => {
  return (
    <img
      src={isLazy ? fallbackSrc : src}
      alt={alt}
      className={isLazy ? "lazy" : ""}
      srcSet={isLazy ? "" : srcSet}
      data-srcset={srcSet}
      data-src={src}
      style={style}
      onClick={onClick}
    />
  );
};

Image.defaultProps = {
  onClick: () => {},
  isLazy: false,
};

export default Image;
