import React from "react";
import { Box, Divider } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { colors, textStyles } from "../assets/styleconfig";

function Cards({name, height, width, quantity, color, thickness, glass_type}){
    return (
        <Box
        backgroundColor={colors.tertiary}
        height="auto"
        width="100%"
        borderRadius={2}
        margin="1px"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          margin={0.5}
        >
          <InventoryIcon htmlColor={colors.primary} />
          <h3 style={textStyles}> {name}</h3>
        </Box>
        <Divider />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          margin={1}
        >
          <p style={textStyles}>
            <b>ALTURA:</b> {height}m
          </p>
          <p style={textStyles}>
            <b>LARGURA:</b> {width}m
          </p>
          <p style={textStyles}>
            <b>ÁREA:</b> {(height * width).toFixed(2)}m²
          </p>
          <p style={textStyles}>
            <b>QUANTIDADE:</b> {quantity}
          </p>
          <p style={textStyles}>
            <b>COR:</b> {color}
          </p>
          <p style={textStyles}>
            <b>ESPESSURA:</b> {thickness}
          </p>
          <p style={textStyles}>
            <b>TIPO DE VIDRO:</b> {glass_type}
          </p>
        </Box>
      </Box>
    )
}

export default Cards;