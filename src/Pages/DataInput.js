//FormData

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../Redux/dataSlice";
import { Form, Input, Button, Select } from "antd";
import DynamicFieldGenerator from "../Components/DynamicFieldsGenerator";

const { Option } = Select;

const DataInput = () => {
  const forms = useSelector((state) => state.forms);
  const [selectedForm, setSelectedForm] = useState("");
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (label, value) => {
    setFormData({ ...formData, [label]: value });
  };

  const handleSubmit = () => {
    dispatch(addData({ formName: selectedForm, formData }));
    setFormData({});
  };

  return (
    <Form>
      <Form.Item label="Select Form">
        <Select
          value={selectedForm}
          onChange={(value) => setSelectedForm(value)}
        >
          {forms.map((form) => (
            <Option key={form.formName} value={form.formName}>
              {form.formName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {forms
        .find((form) => form.formName === selectedForm)
        ?.fields.map((field, index) => (
          // <Form.Item key={index} label={field.label}>
          <DynamicFieldGenerator
            field={field}
            handleInputChange={handleInputChange}
          ></DynamicFieldGenerator>
          // </Form.Item>
        ))}
      <Button type="primary" onClick={handleSubmit}>
        Submit Data
      </Button>
    </Form>
  );
};

export default DataInput;
