import React from "react";
import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import Button from "./Button";
import { ButtonProps } from "antd";

export default {
  title: "Components/general/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}>Test</Button>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.storyName = "Button Component"
Primary.args = { type: "dashed",  };