import React from "react";
import { Checkbox, Form } from "antd";

const CheckboxField = ({ label, name, rules, options, onChange }) => {
  return (
    <Form.Item label={label} name={name} rules={rules} valuePropName="checked">
      <Checkbox
        onChange={(e) => {
          onChange(label, e.target.checked);
        }}
      >
        {label}
      </Checkbox>
    </Form.Item>
  );
};

export default CheckboxField;
