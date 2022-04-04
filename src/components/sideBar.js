import { Box, Typography} from "@mui/material";

const  SideBar = ({children}) => {

  console.log("*****************Form*******************");
  return (

      <Box sx={{
          display:"flex"
      }}>
        <Box
          sx={{
            color: "black",
            height: "100vh",
            width:"300px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
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
              <img src="/image.png"/>
        </Box>
        <Box sx={{
            backgroundColor:"primary.main",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            height:"100vh",
            alignItems:"center"
        }}>
            {children}
        </Box>
      </Box>
     
  
  );
}

export default SideBar;
