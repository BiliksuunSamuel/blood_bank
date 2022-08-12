import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode[];
}
export default function Row({ children }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      })}
    >
      {children.map((child) => (
        <React.Fragment key={Math.random().toString() + Date.now().toString()}>
          {child}
        </React.Fragment>
      ))}
    </Box>
  );
}
