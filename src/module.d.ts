import "styled-components";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.less" {
  const content: any;
  export default content;
}

declare module "styled-components" {
  export interface DefaultTheme extends ThemedBaseStyledInterface {}
}
