import React from "react";
import logo from "./assets/logo.png";
import { Box, Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Instruction from "./modules/instruction";
import { colors } from "./assets/styleconfig";
import Insights from "./modules/Insights";
import test_data from "./test_data";

function App() {
  return (
    <>
      <Container>
        <Box display="flex" justifyContent="center" height="10vh" margin={2}>
          <img src={logo} alt="Logo" />
        </Box>
        <Box
          display="flex"
          border="1px solid"
          boxShadow={5}
          borderRadius={2}
          p={0}
        >
          <Insights cards_data={test_data}/>
          <Instruction />
        </Box>
      </Container>
    </>
  );
}

export default App;
