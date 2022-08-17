import { ButtonProps } from "antd";
import { ButtonType } from "antd/lib/button";
import { ButtonHTMLType } from "antd/lib/button/button";

export interface BaseButtonProps
  extends Omit<ButtonProps, "type" | "htmlType"> {
  variant?: ButtonType;
  type?: ButtonHTMLType;
}
