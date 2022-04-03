import { Box, Typography, Grid,Card,CardMedia } from "@mui/material";
function RegisterFrom() {
  return (
    <Grid container direction="row">
      <Grid item sm={3} lg={1.7}>
        <Box
          sx={{
            color: "black",
            height: "100vh",
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
                backgroundColor: "primary.main",
                color: "white",
                padding: "5px 10px",
                borderRadius: "10px",
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

          <Typography>Image</Typography>
        </Box>
      </Grid>
      <Grid
        item
        lg={10.3}
        sm={9}
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <Box>

        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterFrom;
