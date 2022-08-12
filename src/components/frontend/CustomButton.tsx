import { Button, ButtonProps } from "@mui/material";
import React, { MouseEvent, ReactNode } from "react";

interface IProps {
  children?: ReactNode | string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  props?: ButtonProps;
}
export default function CustomButton({ children, handleClick, props }: IProps) {
  return (
    <Button variant="contained" size="small" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
