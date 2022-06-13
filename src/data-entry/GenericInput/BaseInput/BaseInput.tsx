import React from "react";
import { Input, InputProps } from "antd";

const BaseInput: React.FC<InputProps> = (props) => (
  <Input placeholder="Basic usage" {...props} />
);

export default BaseInput;
