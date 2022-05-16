import React, { FC } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useActions } from "../../hooks/useActions";

const Search: FC = () => {
  const { setSearchQuery } = useActions();

  return (
    <Input
      size="large"
      placeholder="Search"
      allowClear
      prefix={<SearchOutlined />}
      className="header-search"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Search;
