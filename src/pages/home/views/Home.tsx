import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../components/frontend";
import resources from "../../../resources";

export default function Home() {
  const navigation = useNavigate();
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: "100vh",
        overflowX: "hidden",
        paddingBottom: "500px",
        overflowY: "auto",
      })}
    >
      <Box
        sx={(theme) => ({
          height: "60vh",
          backgroundColor: "#00416a",
          backgroundBlendMode: "exclusion",
          width: "100%",
          //   backgroundImage: `url(${resources.healthimage2})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            height: "100vh",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing(2),
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              color: "#fff",
              fontSize: theme.spacing(3),
              width: "100%",
              textAlign: "center",
            })}
            variant="body1"
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography
            sx={(theme) => ({
              color: "#f0f0f0",
              fontSize: theme.spacing(2),
              width: "100%",
              textAlign: "center",
            })}
            variant="body2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur temporibus facilis ratione dignissimos, distinctio
            consectetur! Veritatis optio velit rerum voluptas.
          </Typography>
          <Box
            sx={(theme) => ({
              width: "100%",
              margin: theme.spacing(2, 0),
              padding: theme.spacing(1),
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Button
              onClick={() => navigation("/account/register")}
              variant="contained"
              size="small"
            >
              Sign Up With Us
            </Button>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            width: "300px",
            height: "300px",
            borderRadius: "300px",
            overflow: "hidden",
            margin: theme.spacing(2, 0),
            [theme.breakpoints.down("sm")]: {
              height: "600px",
            },
          })}
        >
          <img src={resources.healthimage2} />
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          padding: theme.spacing(2),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          boxShadow: theme.shadows[1],
          margin: theme.spacing(1, 0),
          justifyContent: "center",
        })}
      >
        <Text> Services</Text>
      </Box>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(2),
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            boxShadow: theme.shadows[2],
            borderRadius: 0,
            display: "flex",
            flexDirection: "row",
            alignitems: "center",
            width: "350px",
            height: "200px",
            margin: theme.spacing(0, 1.5),
            [theme.breakpoints.down("sm")]: {
              width: "95%",
              alignSelf: "center",
              margin: theme.spacing(2, 0),
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: "180px",
              height: "100%",
              overflow: "hidden",
            })}
          >
            <img src={resources.blooddonation} />
          </Box>
          <Box
            sx={(theme) => ({
              width: "170px",
              height: "100%",
              padding: theme.spacing(1.5),
            })}
          >
            <Typography
              sx={(theme) => ({
                textAlign: "center",
              })}
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              soluta placeat nostrum, qui sapiente minus
            </Typography>
            <Button
              sx={(theme) => ({
                margin: theme.spacing(2, 0),
                textTransform: "none",
                fontSize: theme.spacing(2),
              })}
              variant="outlined"
              size="small"
              color="primary"
              fullWidth
            >
              Donate
            </Button>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            boxShadow: theme.shadows[2],
            borderRadius: 0,
            display: "flex",
            flexDirection: "row",
            alignitems: "center",
            width: "350px",
            height: "200px",
            margin: theme.spacing(0, 1.5),
            [theme.breakpoints.down("sm")]: {
              width: "95%",
              alignSelf: "center",
              margin: theme.spacing(2, 0),
            },
          })}
        >
          <Box
            sx={(theme) => ({
              width: "180px",
              height: "100%",
              overflow: "hidden",
            })}
          >
            <img src={resources.blooddonation} />
          </Box>
          <Box
            sx={(theme) => ({
              width: "170px",
              height: "100%",
              padding: theme.spacing(1.5),
            })}
          >
            <Typography
              sx={(theme) => ({
                textAlign: "center",
              })}
              variant="body2"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              soluta placeat nostrum, qui sapiente minus
            </Typography>
            <Button
              sx={(theme) => ({
                margin: theme.spacing(2, 0),
                textTransform: "none",
                fontSize: theme.spacing(2),
              })}
              variant="outlined"
              size="small"
              color="primary"
              fullWidth
            >
              Request
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
