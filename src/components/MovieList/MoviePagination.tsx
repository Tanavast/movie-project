import React, { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Pagination } from "antd";

const MoviePagination: FC = () => {
  const { page, total } = useTypedSelector((state) => state.movieList);
  const { setPage } = useActions();
  const maxPagesCheck = (value: number | undefined) => {
    if (value === undefined) {
      return value;
    }
    if (value > 10000) {
      return 10000;
    }
    return value;
  };
  return (
    <Pagination
      current={page}
      defaultCurrent={1}
      total={maxPagesCheck(total)}
      onChange={(page) => setPage(page)}
      defaultPageSize={20}
    />
  );
};

export default MoviePagination;
