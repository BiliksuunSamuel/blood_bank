import { Avatar, Chip, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import { ISideBarLink } from "../../interface";

interface IProps {
  info: ISideBarLink;
  handleClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
export default function SidebarLink({ info, handleClick }: IProps) {
  return (
    <Chip
      onClick={handleClick}
      id={info.route ? info.route : ""}
      sx={(theme) => ({
        borderRadius: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      })}
      label={
        <Typography
          sx={(theme) => ({
            flex: 1,
            textAlign: "left",
          })}
          variant="body2"
        >
          {info.title}
        </Typography>
      }
      avatar={<info.Icon />}
    />
  );
}
