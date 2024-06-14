import React from "react";
import logo from "./assets/logo.png";
import { Box, Container } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Instruction from "./modules/instruction";
import Insights from "./modules/Insights";
import test_data from "./test_data";

function App() {
  const [formData, setFormData] = React.useState();
  const [result, setResult] = React.useState();
  const [fileName, setFileName] = React.useState("Selecione um arquivo");

  return (
    <>
    <Container maxWidth style={{
      fontFamily: "Roboto",
      fontSize: "11px"
    }}>
        <Box display="flex" justifyContent="center" height="10vh" margin={2}>
          <img src={logo} alt="Logo" />
        </Box>
        <Box
          display="flex"
          boxShadow={5}
          borderRadius={2}
          p={0}
          maxWidth
          maxHeight
        >
          <Insights cards_data={test_data} />
          <Instruction
            setFormData={setFormData}
            fileName={fileName}
            setFileName={setFileName}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
