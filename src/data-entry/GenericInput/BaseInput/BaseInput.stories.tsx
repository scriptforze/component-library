import React from "react";
import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import BaseInput from "./BaseInput";
import { BaseInputProps } from "./types";

export default {
  title: "Components/GenericInput/BaseInput",
  component: BaseInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<BaseInputProps> = (args) => <BaseInput {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.storyName = "Base Input Component"
Primary.args = { size: "large" };