import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Select } from "antd";

const { Option } = Select;

const Genres: FC = () => {
  const { genres, with_genres } = useTypedSelector((store) => store.movieList);
  const { setWithGenres } = useActions();

  const handleChange = (value: string) => {
    setWithGenres(value);
  };

  return (
    <Select mode="multiple" allowClear style={{ width: "100%" }} placeholder="Select genres" onChange={handleChange}>
      {genres.map((p) => (
        <Option key={p.id} value={p.id}>
          {p.name}
        </Option>
      ))}
    </Select>
  );
};

export default Genres;
