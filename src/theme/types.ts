export type ThemeMainColors = {
  primary: string;
  success: string;
  warning: string;
  danger: string;
};

export type ThemeSecondaryColors = {
  purple: string;
  green: string;
  pink: string;
  red: string;
  orange: string;
  yellow: string;
  geekblue: string;
  lime: string;
};

export type ThemeGrayScaleColors = {
  dark: string;
  gray: string;
  light: string;
  lighter: string;
  lightest: string;
  background: string;
  text: string;
  border: string;
};

export type ThemeColors = {
  main: ThemeMainColors;
  secondary: ThemeSecondaryColors;
  grayscale: ThemeGrayScaleColors;
};

export default interface ThemeInterface {
  colors: ThemeColors;
}
