import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/system";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode | string;
  props?: TypographyProps;
}
export default function Text({ children, props }: IProps) {
  return (
    <Typography
      variant="body1"
      sx={(theme) => ({
        textAlign: "center",
        width: "100%",
      })}
      {...props}
    >
      {children}
    </Typography>
  );
}
