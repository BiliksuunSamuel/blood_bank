import { Menu, MenuItem } from "@mui/material";
import React from "react";

interface IProps {
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}
export default function AccountMenu({ anchorEl, handleClose }: IProps) {
  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
}
