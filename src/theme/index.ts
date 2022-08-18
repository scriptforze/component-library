import ThemeProps, {
  ThemeColors,
  ThemeMainColors,
  ThemeGrayScaleColors,
  ThemeSecondaryColors,
} from "./types";

const MainColors: ThemeMainColors = {
  primary: "#3E79F7",
  success: "#04D182",
  warning: "#ffc542",
  danger: "#ff6b72",
};

const SecondaryColors: ThemeSecondaryColors = {
  geekblue: "#17bcff",
  green: "#21B573",
  lime: "#a0d911",
  orange: "#fa8c16",
  pink: "#eb2f96",
  purple: "#a461d8",
  red: "#de4436",
  yellow: "#fadb14",
};

const GrayScaleColors: ThemeGrayScaleColors = {
  background: "#fafafb",
  border: "#e6ebf1",
  dark: "#1a3353",
  gray: "#455560",
  light: "#72849a",
  lighter: "#ededed",
  lightest: "#f7f7f8",
  text: "#72849a",
};

const Colors: ThemeColors = {
  main: MainColors,
  secondary: SecondaryColors,
  grayscale: GrayScaleColors,
};

const theme: ThemeProps = {
  colors: Colors,
};

export default theme;
