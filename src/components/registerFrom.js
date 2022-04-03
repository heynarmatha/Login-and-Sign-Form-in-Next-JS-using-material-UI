import { Box, Typography } from "@mui/material";
import { padding } from "@mui/system";

const RegisterFrom = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100vh",
          width: "250px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "white",
              color: "black",
              padding: "5px 10px",
              borderRadius:"10px",
            }}
          >
            {" "}
            Ua
          </Typography>
          <Typography variant="h5" ml={1}>
            {" "}
            UI Analysis
          </Typography>
        </Box>

        <Typography variant="subtitle2" component="h1" fontSize="30px">
          Make your Interface review easier
        </Typography>
        <Typography>image</Typography>
      </Box>
    </>
  );
};

export default RegisterFrom;
