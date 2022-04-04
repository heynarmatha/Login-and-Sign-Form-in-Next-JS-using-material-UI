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
import Link from "next/link";
import SideBar from "../src/components/sideBar";
const RegisterForm = ({}) => {

  return (
    <>
    <SideBar>
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
                Registration
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
                Register your self to experience advance way of review your
                projects.
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
                  Continue with Google
                </Button>
              </Stack>
              <Typography variant="subtitle1" textAlign="center" mb={1}>
                Or
              </Typography>
              <Typography variant="subtitle1" textAlign="center" mb={1}>
                <Divider>Continue with email id.</Divider>
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "15px",
                }}
              >
                Name
              </Typography>
              <Stack my={1.5}>
                <TextField
                  placeholder="Enter your name"
                  type="text"
                  size="small"
                  required
                />
              </Stack>
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
                Create password
              </Typography>
              <Stack my={1.5} mb={3}>
                <TextField
                  type="password"
                  placeholder="Atleast 8 characters"
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
              <Typography variant="subtitle1" textAlign="center">
                <Divider>Organization name</Divider>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  Organization
                </Typography>
                <Typography sx={{ fontSize: "12px" }} my={1.3}>
                  Company or organization
                </Typography>
              </Box>

              <Stack my={1.5} mb={3}>
                <TextField
                  type="password"
                  placeholder="Enter Name or URL"
                  size="small"
                  required
                />
              </Stack>
              <Stack>
                <Button variant="contained">
                  <Link href="/home">Register</Link>
                </Button>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    padding: "20px 0",
                  }}
                >
                  Already registered ?
                </Typography>
                <Button>
                  <Link href="/loginForm">
                  Login here
                  </Link>
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Stack>
    </SideBar>
    
    </>

  );
};

export default RegisterForm;
