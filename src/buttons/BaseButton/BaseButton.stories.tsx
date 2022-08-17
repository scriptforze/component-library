import React from "react";
import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import BaseButton from "./BaseButton";
import { BaseButtonProps } from "./types";

export default {
  title: "Components/Buttons/BaseButton",
  component: BaseButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<BaseButtonProps> = (args) => <BaseButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.storyName = "Base Button"
Primary.args = { variant: "primary",  };