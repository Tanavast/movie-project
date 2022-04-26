import React from "react";
import { Select } from "antd";
import { sortOptios } from "../../utils/sortOptions";
import { useActions } from "../../hooks/useActions";
const { Option } = Select;

const SortSelect = () => {
  const { setSortBy, setIsLoading } = useActions();

  const handleChange = (value: string) => {
    setSortBy(value);
    setIsLoading(true);
  };

  return (
    <Select defaultValue="popularity.desc" onChange={handleChange}>
      {sortOptios.map((p) => (
        <Option key={p.option} value={p.option}>
          {p.name}
        </Option>
      ))}
    </Select>
  );
};

export default SortSelect;
