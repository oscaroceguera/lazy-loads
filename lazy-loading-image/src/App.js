import { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";

import Image from "./image";
import useIO from "./useIO";

function App() {
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ data", data);

  const [observer, setElements, entries] = useIO({
    threshold: 0.25,
    root: null,
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data.slice(0, 25));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (data.length) {
      let img = Array.from(document.getElementsByClassName("lazy"));
      console.log("🚀 ~ file: App.js ~ line 31 ~ useEffect ~ img", img);
      setElements(img);
    }
  }, [data, setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  return (
    <div className="App">
      {data.map((item) => (
        <Image
          key={item.id}
          src={item.thumbnailUrl}
          fallbackSrc={logo}
          isLazy
          style={{
            display: "block",
            height: "150px",
            width: "150px",
            margin: "auto",
            marginBottom: "15px",
          }}
          alt="thumbnails"
        />
      ))}
    </div>
  );
}

export default App;
