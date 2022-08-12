import { Box } from "@mui/material";
import React from "react";

interface IProps {
  height?: number;
  width?: number;
}
export default function SizedBox({ height, width }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        margin: theme.spacing(height ? height : 0, width ? width : 0),
      })}
    ></Box>
  );
}
