import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "#ffffff" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="default"
        indicatorColor="inherit"
        aria-label="secondary tabs example"
      >
        <Tab
          label="Whitepaper"
          // styles={{
          //   color: "#ffffff",
          //   width: "33.3%",

          //   fontSize: 15,
          // }}
        />
        <Tab label="Documentation" />
        <Tab label="Blog" />
      </Tabs>
    </Box>
  );
}
