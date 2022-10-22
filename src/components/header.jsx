import React from "react";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Cover from "../img/Deloitte_world.jpg";
import Company from "../img/Deloitte.png";
import logo from "../img/ROI.png";

const Header = () => {
  return (
    <Stack spacing={-10}>
      <Paper
        elevation={3}
        sx={{
          m: 1,
          width: "100%",
          height: 500,
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "flex-end",
          backgroundImage: `url(${Cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <img
          src={Company}
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </Paper>

      <Stack direction="row" spacing={13}>
        <Avatar
          alt="Training Company Logo"
          src={logo}
          sx={{
            width: 300,
            height: 300,
            left: 50,
          }}
        />

        <Typography variant="h1" alignSelf={"center"} fontWeight={"bold"}>
          Simple Event App
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Header;
