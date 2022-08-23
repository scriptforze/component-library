import React from "react";
import { Button as AntdButton, ButtonProps } from "antd";

const Button: React.FC<ButtonProps> = ({children, ...props}) => (
  <AntdButton {...props}>{children}</AntdButton>
);

export default Button;
