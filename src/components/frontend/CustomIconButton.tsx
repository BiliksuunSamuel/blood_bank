import { IconButton, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { MouseEvent } from "react";

interface IProps {
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
export default function CustomIconButton({ handleClick, Icon }: IProps) {
  return (
    <IconButton onClick={handleClick}>
      <Icon />
    </IconButton>
  );
}
