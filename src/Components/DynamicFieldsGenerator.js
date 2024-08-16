import React from "react";
import { Form, Input, Select, Checkbox, InputNumber } from "antd";
import { FORM_FIELDS } from "../Constants/Constants";
import TextField from "./TextField";
import TextAreaField from "./TextArea";
import NumberField from "./Number";
import Dropdown from "./DropDown";
import CheckboxField from "./CheckBox";

const { Option } = Select;

const DynamicFieldGenerator = ({ field, handleInputChange }) => {
  const getRules = () => {
    const rules = [];
    if (field.required) {
      rules.push({ required: true, message: `${field.label} is required` });
    }
    if (field.validation) {
      rules.push({
        pattern: field.validation,
        message: field.validationMessage,
      });
    }
    return rules;
  };

  const renderField = ({ field, handleInputChange }) => {
    switch (field.type) {
      case FORM_FIELDS.TEXTFIELD:
        return (
          <TextField
            label={field.label}
            name={field.name}
            rules={getRules()}
            onChange={handleInputChange}
          />
        );
      case FORM_FIELDS.TEXTAREA:
        return (
          <TextAreaField
            label={field.label}
            name={field.name}
            rules={getRules()}
            onChange={handleInputChange}
          />
        );
      case FORM_FIELDS.DROPDOWN:
        return (
          <Dropdown
            label={field.label}
            name={field.name}
            rules={getRules()}
            onChange={handleInputChange}
          />
        );
      case FORM_FIELDS.CHECKBOX:
        return (
          <CheckboxField
            label={field.label}
            name={field.name}
            rules={getRules()}
            onChange={handleInputChange}
          />
        );
      case FORM_FIELDS.NUMBERS:
        return (
          <NumberField
            label={field.label}
            name={field.name}
            rules={getRules()}
            onChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    // <Form.Item
    //   label={field.type !== FORM_FIELDS.CHECKBOX ? field.label : ""}
    //   rules={getRules()}
    // >
    <>{renderField({ field, handleInputChange })}</>
    // </Form.Item>
  );
};

export default DynamicFieldGenerator;
