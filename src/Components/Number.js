import React from "react";
import { InputNumber, Form } from "antd";

const NumberField = ({ label, name, rules, placeholder, onChange }) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <InputNumber
        onChange={(value) => {
          onChange(label, value); // Pass name and value to onChange
        }}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default NumberField;
