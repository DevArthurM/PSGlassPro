import React from "react";
import { Box, Button, TextField } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { colors } from "../assets/styleconfig";
import { PaddingOutlined } from "@mui/icons-material";

function Instruction(props) {
  return (
    <Box
      boxShadow={5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
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
        rows={13} // Adjust the division factor as needed
        placeholder="Digite aqui detalhes do pedido..."
        style={{
          backgroundColor: colors.tertiary,
          border: `1px solid ${colors.secondary}`,
          borderRadius: "5px",
          width: "100%",
        }}
      />

      <Box display="flex" alignItems="center" style={{
        justifyContent: "space-between",
        width: "90%",
        marginTop: "10px"
      }}>
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
              props.setFileName(event.target.files[0].name);
            }}
          />
        </Button>
      </Box>
    </Box>
  );
}

export default Instruction;
