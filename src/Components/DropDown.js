import React from "react";
import { Select, Form } from "antd";

const { Option } = Select;

const Dropdown = ({ label, name, rules, options, placeholder, onChange }) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Select
        onChange={(e) => {
          onChange(label, e.target.value);
        }}
        placeholder={placeholder}
      >
        {options &&
          options?.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
      </Select>
    </Form.Item>
  );
};

export default Dropdown;
