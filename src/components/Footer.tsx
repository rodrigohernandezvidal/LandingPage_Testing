import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py: 3, bgcolor: "#333", color: "white" }}>
      <Typography variant="body2">
        © 2025 Foog Technology Spa. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
