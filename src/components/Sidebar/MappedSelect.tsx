import React, { FC, useTransition } from "react";
import { Select } from "antd";

const { Option } = Select;

interface SelectComponent {
  item: any[];
  handleChange: (value: any) => void;
  placeholder?: string;
  defaultValue?: string;
  mode?: "multiple" | "tags" | undefined;
  allowClear: boolean;
  disabled: boolean;
}

const MappedSelect: FC<SelectComponent> = ({
  item,
  handleChange,
  placeholder,
  defaultValue,
  mode,
  allowClear,
  disabled,
}) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Select
      mode={mode}
      allowClear={allowClear}
      style={{ width: "100%" }}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={disabled}
    >
      {item.map((p) => (
        <Option key={p.id} value={p.id}>
          {p.name}
        </Option>
      ))}
    </Select>
  );
};

export default MappedSelect;
