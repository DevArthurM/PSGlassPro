import React from "react";
import { Box, Divider } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { colors, textStyles } from "../assets/styleconfig";
import Cards from "./cards";

function Insights({ cards_data }) {
  return (
    <Box
      sx={{
        boxShadow: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 2,
        width: "90%",
        bgcolor: colors.primary,
        borderRadius: 2,
        p: 3,
        height: "60vh",
        overflowX: "hidden",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "25px",
        },
        "&::-webkit-scrollbar-track": {
          background: colors.primary,
          borderRadius: "10px",
          margin: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: colors.tertiary,
          borderRadius: "25px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: colors.highlight,
        },
      }}
    >
      {cards_data.map((card, index) => (
        <Cards
          name={card.name}
          width={card.width}
          height={card.height}
          quantity={card.quantity}
        />
      ))}
    </Box>
  );
}

export default Insights;
