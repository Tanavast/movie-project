import React, { FC, useRef, useEffect, useState } from "react";
import { IMovie } from "../../models/IMovie";
import { Card } from "antd";
import "./index.css";
import Stars from "../Stars";
import GenreItem from "../GenreItem";
import Image from "../Image";

interface MovieItem {
  movieInfo: IMovie;
}

const MovieItem: FC<MovieItem> = (props) => {
  const { genre_ids, title, vote_average, backdrop_path, release_date } = props.movieInfo;
  const { Meta } = Card;
  const ref = useRef<HTMLDivElement>(null);

  const [currentHeight, setCurrentHeight] = useState(52);

  useEffect(() => {
    let clientHeight = ref.current?.clientHeight;
    if (clientHeight !== undefined) {
      setCurrentHeight(clientHeight);
    }
  }, []);

  return (
    <Card
      className="movie_card"
      size="small"
      style={{ width: 240, height: 500, textAlign: "center" }}
      cover={<Image alt="movie-img" backdrop_path={backdrop_path} className="movie_card_img" />}
    >
      <Meta title={title}></Meta>
      <div className="info_container">
        <Stars rating={vote_average / 2} />
        <div className="info_list" ref={ref}>
          <span>{release_date?.slice(0, 4)}</span>
          {genre_ids?.map((p) => (
            <GenreItem key={p} genre={p} />
          ))}
          {/* {genre_ids?.map((p) => (currentHeight <= 52 ? <GenreItem key={p} genre={p} /> : <div key="p"> ... </div>))} */}

          {/* {genre_ids?.map((p) => {
            if (currentHeight <= 52) {
              return <GenreItem key={p} genre={p} />;
            } else {
              return <div key="p"> ... </div>;
            }
          })} */}
        </div>
      </div>
    </Card>
  );
};

export default React.memo(MovieItem);
