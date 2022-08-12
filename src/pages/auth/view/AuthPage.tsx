import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthPage() {
  return (
    <Container>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(1.5),
          boxShadow: theme.shadows[2],
        })}
      >
        <Typography variant="body1">Company Name</Typography>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
          })}
        >
          <Typography variant="body2">Donate Blood To Save A Life</Typography>
        </Box>
      </Box>
      <Container
        sx={(theme) => ({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        })}
      >
        <Outlet />
      </Container>
    </Container>
  );
}
