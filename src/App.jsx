import React from "react";
import logo from "./assets/logo.png";
import { Box, Button, Container, TextField, Divider } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InventoryIcon from "@mui/icons-material/Inventory";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const colors = {
  primary: "#2B6E8A", // Vermelho PS do Vidro
  secondary: "#414a4c", // Preto
  tertiary: "#EFFBFD", // Branco
  highlight: "#FFA500", // Vermelho
  text: "#333333"
};

const textStyles = { margin: "0.2rem", color : colors.text}

function App() {
  return (
    <>
      <Container>
        <Box display="flex" justifyContent="center" height="10vh" margin={2}>
          <img src={logo} alt="Logo" />
        </Box>
        <Box
          display="flex"
          bgcolor={colors.tertiary}
          borderRadius={5}
          boxShadow={5}
          p={0}
        >
          <Box
            boxShadow={5}
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin={2}
            width="90%"
            bgcolor={colors.primary}
            borderRadius={2}
            p={3}
          >
            <Box
              backgroundColor={colors.tertiary}
              height="auto"
              width="100%"
              borderRadius={2}
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <InventoryIcon htmlColor={colors.primary} />
                <h3 style={textStyles}> Nome do produto</h3>
              </Box>
              <Divider />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                margin={1}
              >
                <p style={textStyles}><b>ALTURA:</b> 1,5m</p>
                <p style={textStyles}><b>LARGURA:</b> 1,5m</p>
                <p style={textStyles}><b>ÁREA:</b> 1,5m</p>
                <p style={textStyles}><b>QUANTIDADE:</b> 2</p>
              </Box>
            </Box>
          </Box>
          <Box
            boxShadow={5}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bgcolor={colors.primary}
            borderRadius={2}
            width="50%"
            margin={2}
            p={3}
          >
            <TextField
              variant="filled"
              color={colors.tertiary}
              multiline
              rows={12}
              placeholder="Digite aqui detalhes do pedido..."
              margin="normal"
              style={{
                backgroundColor: colors.tertiary,
                border: `1px solid ${colors.secondary}`,
                borderRadius: "5px",
              }}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="contained"
                style={{ backgroundColor: colors.secondary }}
              >
                <b>Resumir planta</b>
                <AutoAwesomeIcon />
              </Button>
              <Button
                width="100%"
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                style={{ backgroundColor: colors.highlight }}
              >
                <b>Enviar planta</b>
                <FileOpenIcon />
                <input
                  type="file"
                  hidden
                  onChange={(event) => {
                    // handle file upload here
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
