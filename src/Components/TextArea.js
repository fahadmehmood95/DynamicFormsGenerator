import React from "react";
import { Input, Form } from "antd";

const { TextArea } = Input;

const TextAreaField = ({ label, name, rules, placeholder, onChange }) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <TextArea
        onChange={(e) => {
          console.log("e", e.target.value);
          onChange(label, e.target.value);
        }}
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default TextAreaField;
