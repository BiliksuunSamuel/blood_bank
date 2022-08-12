import { AppBar, Box, Toolbar } from "@mui/material";
import React, { MouseEvent } from "react";
import { CustomIconButton, Expanded, SizedBox } from "../components/frontend";
import Icons from "../constants/Icons";

interface IProps {
  sidebar?: boolean;
  handleSidebar?: (event: MouseEvent<HTMLButtonElement>) => void;
  handleAccountMenu?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default function Navbar({
  sidebar,
  handleSidebar,
  handleAccountMenu,
}: IProps) {
  return (
    <AppBar
      sx={(theme) => ({
        height: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: sidebar ? "240px" : 0,
      })}
      color="default"
      variant="outlined"
    >
      <Toolbar
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(0, 1),
          width: "100%",
        })}
      >
        <Box></Box>
        <Expanded />
        <Box
          sx={(theme) => ({
            padding: theme.spacing(0, 2),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          })}
        >
          <CustomIconButton
            handleClick={handleAccountMenu}
            Icon={Icons.FcBusinessman}
          />
          <SizedBox width={1} />
          <CustomIconButton handleClick={handleSidebar} Icon={Icons.FcMenu} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
