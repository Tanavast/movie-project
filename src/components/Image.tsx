import React, { FC, useState } from "react";
import Spinner from "./Spinner";

interface Image {
  backdrop_path?: string | null;
  alt?: string;
  className?: string;
}

const Image: FC<Image> = (props) => {
  const [loading, setLoading] = useState(true);
  const { backdrop_path, alt, className } = props;

  if (backdrop_path === null) {
    return <img src="../assets/img/empty.png" alt={alt} className={className} />;
  }

  return (
    <>
      <div style={{ display: loading ? "block" : "none" }}>
        <Spinner />
      </div>
      <img
        style={{ display: loading ? "none" : "block" }}
        className={className}
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${backdrop_path}`}
        alt={alt}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default Image;
