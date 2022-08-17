import React, { ComponentPropsWithRef } from "react";

const BaseButton: React.FC<ComponentPropsWithRef<'button'>> = (props) => (
  <button {...props}>Test</button>
);

export default BaseButton;
