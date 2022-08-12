import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigation = useNavigate();
  return (
    <Container>
      <Box
        sx={(theme) => ({
          padding: theme.spacing(1.5),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: theme.spacing(1, 0),
          boxShadow: theme.shadows[1],
        })}
      >
        <Typography variant="body1">Register Account</Typography>
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
            padding: theme.spacing(4),
            border: "1px solid #d0d0d0",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
              padding: theme.spacing(2),
            },
          })}
        >
          <Box></Box>
          <Box>
            <TextField
              variant="outlined"
              size="small"
              label="Full Name*"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
              })}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Email Address*"
              type="email"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
              })}
            />
            <TextField
              variant="outlined"
              size="small"
              type="tel"
              label="Phone Number*"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
              })}
            />
            <TextField
              variant="outlined"
              size="small"
              type="password"
              label="Password*"
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
              })}
            />
            <Button
              sx={(theme) => ({
                width: "100%",
                margin: theme.spacing(1, 0),
              })}
              size="small"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
            <Button
              sx={(theme) => ({
                textTransform: "none",
                width: "100%",
              })}
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => navigation("../login")}
            >
              Already Registered?
            </Button>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
}
