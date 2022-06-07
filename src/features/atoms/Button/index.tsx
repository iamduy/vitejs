import React from "react";
import { Button, ButtonProps } from "antd";
const BaseButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default BaseButton;
