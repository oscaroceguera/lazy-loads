import React from "react";
import logo from "../logo.svg";

const ListItem = ({ observer, sprite }) => {
  const imgRef = React.useRef(null);

  React.useEffect(() => {
    observer.observe(imgRef.current);
  }, [observer]);

  return (
    <li>
      <img
        ref={imgRef}
        data-src={sprite}
        src={logo}
        alt="as"
        width={96}
        height={96}
      />
    </li>
  );
};

export default ListItem;
