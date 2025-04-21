import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const colors = {
  primary: '#FF2D55',
  secondary: '#3A86FF',
  accent: '#FFBE0B',
  dark: '#1A1A2E',
  light: '#F8F9FA',
  white: '#FFFFFF',
};

const Navbar = () => {
  const location = useLocation();

  // Definimos las rutas
  const menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Demo', path: '/demo' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Store', path: '/store' },
    { label: 'Clientes', path: '/clientes' },
    { label: 'Contacto', path: '/contacto' },
    { label: 'Ingresar', path: '/auth/login' }
  ];

  return (
    <AppBar 
      position="sticky"
      sx={{ 
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: colors.white,
        boxShadow: '0 4px 20px rgba(255, 45, 85, 0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 6px 25px rgba(255, 45, 85, 0.3)'
        }
      }}
    >
      <Toolbar sx={{ 
        justifyContent: "space-between",
        maxWidth: 'xl',
        mx: 'auto',
        width: '100%',
        px: { xs: 2, md: 4 }
      }}>
        {/* Logo como enlace a inicio */}
        <Box 
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            cursor: 'pointer'
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/logo_foog.png" 
              alt="Foog Technology Logo" 
              width="50" 
              height="50"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: "bold", 
                color: colors.white,
                fontSize: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                letterSpacing: '0.5px',
                ml: 1
              }}
            >
              Foog Technology
            </Typography>
          </Link>
        </Box>
        
        {/* Menú con rutas */}
        <Box sx={{ 
          display: 'flex',
          gap: { xs: 0.5, sm: 1, md: 2 }
        }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              variant={location.pathname === item.path ? "outlined" : "text"}
              sx={{
                color: colors.white,
                fontWeight: '600',
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                textTransform: 'none',
                letterSpacing: '0.5px',
                borderColor: colors.accent,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;