import React from "react";
import { Box, Button, TextField } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { colors } from "../assets/styleconfig";

function Instruction() {
  return (
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

        <Box display="flex" justifyContent="space-between" alignItems="center">
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
                console.log(event.target.files[0]);
              }}
            />
          </Button>
        </Box>
      </Box>
  );
}


export default Instruction;