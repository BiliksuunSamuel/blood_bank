import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function LoginPage() {
  return (
    <Container
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
      })}
    >
      <Box
        sx={(theme) => ({
          padding: theme.spacing(2),
          boxShadow: theme.shadows[1],
          margin: theme.spacing(1, 0),
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Typography variant="body1">Login</Typography>
      </Box>
      <Container
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        })}
      >
        <Stack
          sx={(theme) => ({
            width: "400px",
            alignSelf: "center",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              padding: theme.spacing(2),
            },
            padding: theme.spacing(4),
            border: "1px solid #d0d0d0",
          })}
        >
          <Box></Box>
          <Box>
            <TextField
              variant="outlined"
              size="small"
              label="Phone/Email"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
              })}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Password"
              type="password"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
              })}
            />
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
                textTransform: "none",
              })}
            >
              Submit
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
                textTransform: "none",
              })}
            >
              don't have Account?
            </Button>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
}
