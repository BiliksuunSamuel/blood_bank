import { Box, Divider, Drawer, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import {
  CustomIconButton,
  Expanded,
  Row,
  SidebarLink,
} from "../components/frontend";
import Icons from "../constants/Icons";
import { SidebarRoutes } from "../data";

interface IProps {
  sidebar?: boolean;
  handleSidebar?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default function Sidebar({ sidebar, handleSidebar }: IProps) {
  return (
    <Drawer
      open={sidebar}
      sx={(theme) => ({
        width: "240px",
        height: "100vh",
      })}
      variant="persistent"
    >
      <Box
        sx={(theme) => ({
          width: "240px",
          height: "100vh",
          background: "#f5f5f5",
        })}
      >
        <Box
          sx={(theme) => ({
            padding: theme.spacing(0, 1),
            height: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Row
            children={[
              <Typography variant="body1">BloodBank</Typography>,
              <Expanded />,
              <CustomIconButton
                Icon={Icons.FcPrevious}
                handleClick={handleSidebar}
              />,
            ]}
          />
        </Box>
        <Divider />
        <Box>
          {SidebarRoutes.map((route) => (
            <Box>
              <SidebarLink handleClick={() => {}} info={route} />
              <Divider />
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
