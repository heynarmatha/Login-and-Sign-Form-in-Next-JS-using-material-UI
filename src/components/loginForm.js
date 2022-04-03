import React from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Button,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
const LoginForm = ({handleLoginbutton}) => {
    console.log("*****************LoginForm*******************");
  return (
    <Stack>
      <Box
        display="flex"
        justifyContent="center"
        height="100vh"
        alignItems="center"
      >
        <Paper elevation={4} borderradius="30px">
          <Box padding="30px 3rem" width="80%" margin="0 auto">
            <Typography
              variant="h4"
              pb={2}
              sx={{
                fontSize: "30px",
              }}
            >
              Login
            </Typography>
            <Typography
              mb={2}
              variant="subtitle2"
              sx={{
                color: "grey",
                fontWeight: "100",
                fontSize: "18px",
              }}
            >
              Login your self to get started with reviewing your products
            </Typography>
            <Stack my={1}>
              <Button
                startIcon={<GoogleIcon color="error" />}
                sx={{
                  border: "1px solid black",
                  padding: "8px",
                  borderradius: "20px",
                }}
              >
                Login with Google
              </Button>
            </Stack>
            <Typography variant="subtitle1" textAlign="center" mb={1}>
              Or
            </Typography>
            <Typography variant="subtitle1" textAlign="center" mb={1}>
              <Divider>Login with email id.</Divider>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "15px",
              }}
            >
              Email ID
            </Typography>
            <Stack my={1.5}>
              <TextField
                placeholder="Enter email id"
                size="small"
                required
                type="email"
              />
            </Stack>

            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "15px",
              }}
            >
              Password
            </Typography>
            <Stack my={1.5} mb={3}>
              <TextField
                type="password"
                placeholder="Enter password"
                size="small"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack>
              <Typography textAlign="right" color="primary" mb={3}>
                Forgot Password
              </Typography>
            </Stack>
            <Stack>
              <Button variant="contained">Login</Button>
            </Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  padding: "20px 0",
                }}
              >
                New to the Platform
              </Typography>
              <Button ml={2} color="primary" onClick={(e)=>handleLoginbutton(e)}>
                Register here
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export default LoginForm;
