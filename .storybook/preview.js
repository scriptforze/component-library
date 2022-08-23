import "antd/dist/antd.css";
import theme from "../src/theme";
import DefaultTheme from "./themes/default";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemes } from "@react-theming/storybook-addon";

addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: DefaultTheme,
  },
};
