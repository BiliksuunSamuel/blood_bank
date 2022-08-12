import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconType } from "react-icons";

export interface ISideBarLink {
  route?: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> | IconType;
  title: string;
}
