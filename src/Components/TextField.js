import React from "react";
import { Input, Form } from "antd";

const TextField = ({ label, name, rules, placeholder, onChange }) => {
  console.log("onChange:", onChange);
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input
        onChange={(e) => {
          onChange(label, e.target.value);
        }}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default TextField;
