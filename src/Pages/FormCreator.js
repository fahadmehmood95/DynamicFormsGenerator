//React
import React, { useState } from "react";
//Dispatch
import { useDispatch } from "react-redux";
//Redux
import { addForm } from "../Redux/formSlice";
//Antd
import { Input, Button, Select, Form, Space } from "antd";
//Constants
import { DropDownOptions } from "../Constants/Constants";
//Navigation
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const FormCreation = () => {
  const [formName, setFormName] = useState("");
  const [fields, setFields] = useState([DropDownOptions[0]]);
  const dispatch = useDispatch();

  const addField = () => {
    setFields([...fields, DropDownOptions[0]]);
  };

  const removeField = () => {
    setFields(fields.slice(0, -1));
  };

  const handleChange = (index, e) => {
    const newFields = fields.map((field, i) =>
      i === index ? { ...field, [e.target.name]: e.target.value } : field
    );
    setFields(newFields);
  };

  const handleSubmit = () => {
    dispatch(addForm({ formName, fields }));
    setFormName("");
    setFields([{ type: "text", label: "" }]);
  };

  return (
    <>
      <Form>
        <Form.Item label="Form Name">
          <Input
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </Form.Item>
        {fields?.map((field, index) => (
          <Space
            key={index}
            style={{ display: "flex", marginBottom: 8 }}
            align="baseline"
          >
            <Form.Item>
              <Select
                name="type"
                value={field.type}
                onChange={(value) =>
                  handleChange(index, { target: { name: "type", value } })
                }
              >
                {DropDownOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Input
                name="label"
                placeholder="Field Label"
                value={field.label}
                onChange={(e) => handleChange(index, e)}
              />
            </Form.Item>
          </Space>
        ))}
        <Button type="dashed" onClick={addField}>
          Add Field
        </Button>
        <Button type="dashed" onClick={removeField}>
          Remove Field
        </Button>
        <Button type="primary" onClick={handleSubmit} style={{ marginLeft: 8 }}>
          Save Form
        </Button>
      </Form>
    </>
  );
};

export default FormCreation;
