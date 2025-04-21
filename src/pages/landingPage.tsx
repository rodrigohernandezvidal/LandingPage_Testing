import React from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Paper,
  Fab,
  IconButton
} from "@mui/material";
import { 
  Business, 
  Code, 
  ContactMail,
  PlayCircle,
  CheckCircle,
  Star,
  ArrowForward,
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Paleta de colores personalizada
const colors = {
  primary: '#FF2D55',    // Rosa vibrante
  secondary: '#3A86FF',  // Azul brillante
  accent: '#FFBE0B',     // Amarillo dorado
  dark: '#1A1A2E',       // Azul oscuro
  light: '#F8F9FA',      // Fondo claro
  white: '#FFFFFF',      // Blanco puro
};

const LandingPage = () => {
    return (
        <Box sx={{ width: "100vw", minHeight: "100vh", overflowX: "hidden", backgroundColor: colors.light }}>
            {/* Hero Section */}
            <Box sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundImage: `linear-gradient(rgba(255, 45, 85, 0.8), rgba(58, 134, 255, 0.8)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: colors.white,
                p: 4,
                position: 'relative'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ p: 4, borderRadius: 2, maxWidth: "80%" }}>
                        <Chip 
                            label="Nueva Versión Disponible" 
                            sx={{ 
                                mb: 2, 
                                backgroundColor: colors.accent,
                                color: colors.dark,
                                fontWeight: 'bold'
                            }} 
                        />
                        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                            Transforma tu negocio con nuestro software
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ mb: 4, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                            Soluciones tecnológicas diseñadas para impulsar tu productividad y crecimiento
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button 
                                variant="contained" 
                                sx={{ 
                                    px: 4, 
                                    py: 1.5,
                                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                                    color: colors.white,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 4px 8px ${colors.primary}`
                                    }
                                }}
                                size="large"
                                endIcon={<PlayCircle />}
                            >
                                Ver Demo
                            </Button>
                            <Button 
                                variant="outlined" 
                                color="inherit" 
                                size="large"
                                endIcon={<ArrowForward />}
                                sx={{ 
                                    px: 4, 
                                    py: 1.5,
                                    color: colors.white,
                                    borderColor: colors.white,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        borderColor: colors.white
                                    }
                                }}
                            >
                                Conoce más
                            </Button>
                        </Box>
                    </Box>
                </motion.div>

                <Fab 
                    color="primary" 
                    sx={{ 
                        position: 'absolute', 
                        bottom: 40,
                        backgroundColor: colors.white,
                        color: colors.primary,
                        '&:hover': {
                            backgroundColor: colors.white,
                            transform: 'scale(1.1)'
                        }
                    }}
                    aria-label="scroll-down"
                >
                    <ArrowForward sx={{ transform: 'rotate(90deg)' }} />
                </Fab>
            </Box>

            {/* Stats Section */}
            <Box sx={{ py: 8, backgroundColor: colors.white }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom sx={{ 
                        fontWeight: 'bold',
                        color: colors.dark,
                        mb: 6,
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: '80px',
                            height: '4px',
                            backgroundColor: colors.primary,
                            margin: '20px auto 0'
                        }
                    }}>
                        Nuestro Impacto
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { value: '500+', label: 'Clientes satisfechos' },
                            { value: '99%', label: 'Uptime garantizado' },
                            { value: '24/7', label: 'Soporte técnico' },
                            { value: '10x', label: 'Aumento productividad' }
                        ].map((stat, index) => (
                            <Grid item xs={6} sm={3} key={index}>
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Paper elevation={3} sx={{ 
                                        p: 3, 
                                        textAlign: 'center',
                                        borderRadius: '16px',
                                        background: colors.white,
                                        border: `2px solid ${colors.light}`,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: colors.primary,
                                            boxShadow: `0 10px 20px rgba(255, 45, 85, 0.1)`
                                        }
                                    }}>
                                        <Typography variant="h3" sx={{ 
                                            fontWeight: 'bold',
                                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {stat.value}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: colors.dark }}>
                                            {stat.label}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Servicios */}
            <Container maxWidth="xl" sx={{ py: 8 }}>
                <Typography variant="h3" align="center" gutterBottom sx={{ 
                    fontWeight: 'bold', 
                    mb: 6,
                    color: colors.dark,
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        display: 'block',
                        width: '80px',
                        height: '4px',
                        backgroundColor: colors.primary,
                        margin: '20px auto 0'
                    }
                }}>
                    Nuestras Soluciones
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {[
                        { 
                            icon: <Business sx={{ fontSize: 60 }} />, 
                            title: "Automatización Empresarial", 
                            features: ["Flujos de trabajo automatizados", "Integración con sistemas existentes", "Reducción de errores humanos"] 
                        },
                        { 
                            icon: <Code sx={{ fontSize: 60 }} />, 
                            title: "Desarrollo de Software", 
                            features: ["Aplicaciones web y móviles", "Sistemas a medida", "Tecnologías modernas"] 
                        },
                        { 
                            icon: <ContactMail sx={{ fontSize: 60 }} />, 
                            title: "Soporte y Consultoría", 
                            features: ["Implementación guiada", "Capacitación de equipos", "Soporte prioritario"] 
                        }
                    ].map((service, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div whileHover={{ y: -10 }}>
                                <Card sx={{ 
                                    textAlign: "center", 
                                    p: 4, 
                                    minHeight: "100%",
                                    borderTop: `4px solid ${
                                        index === 0 ? colors.primary : 
                                        index === 1 ? colors.secondary : 
                                        colors.accent
                                    }`,
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: `0 15px 30px rgba(255, 45, 85, 0.1)`,
                                        transform: 'translateY(-5px)'
                                    }
                                }}>
                                    <Box sx={{ 
                                        color: index === 0 ? colors.primary : 
                                              index === 1 ? colors.secondary : 
                                              colors.accent,
                                        mb: 2 
                                    }}>
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h5" sx={{ 
                                        mb: 3, 
                                        fontWeight: 'bold',
                                        color: colors.dark
                                    }}>
                                        {service.title}
                                    </Typography>
                                    
                                    <Divider sx={{ my: 2 }} />
                                    
                                    <List>
                                        {service.features.map((feature, i) => (
                                            <ListItem key={i} sx={{ px: 0 }}>
                                                <ListItemIcon>
                                                    <CheckCircle sx={{ 
                                                        color: index === 0 ? colors.primary : 
                                                              index === 1 ? colors.secondary : 
                                                              colors.accent 
                                                    }} />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={feature} 
                                                    sx={{ color: colors.dark }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Demo Section */}
            <Box sx={{ 
                py: 8, 
                backgroundColor: colors.white,
                backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255, 45, 85, 0.05) 0%, rgba(255, 45, 85, 0) 20%)'
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" gutterBottom sx={{ 
                                fontWeight: 'bold',
                                color: colors.dark
                            }}>
                                Descubre cómo funciona
                            </Typography>
                            <Typography variant="h5" sx={{ 
                                color: colors.dark,
                                opacity: 0.8,
                                mb: 4
                            }}>
                                Nuestra plataforma en acción
                            </Typography>
                            <List sx={{ mt: 3 }}>
                                {[
                                    "Interfaz intuitiva y fácil de usar",
                                    "Configuración en minutos",
                                    "Escalable según tus necesidades",
                                    "Reportes en tiempo real"
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ px: 0 }}>
                                        <ListItemIcon>
                                            <Star sx={{ color: colors.accent }} />
                                        </ListItemIcon>
                                        <ListItemText 
                                            primary={item} 
                                            sx={{ color: colors.dark }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                            <Button 
                                variant="contained" 
                                size="large" 
                                endIcon={<PlayCircle />}
                                sx={{ 
                                    mt: 3,
                                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                                    color: colors.white,
                                    fontWeight: 'bold',
                                    px: 4,
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 4px 12px ${colors.primary}`
                                    }
                                }}
                            >
                                Ver video demo
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <motion.div whileHover={{ scale: 1.02 }}>
                                <Paper elevation={6} sx={{ 
                                    borderRadius: 2, 
                                    overflow: 'hidden',
                                    border: `1px solid ${colors.light}`,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <CardMedia 
                                        component="img" 
                                        height="400" 
                                        image="https://source.unsplash.com/random/800x600?dashboard" 
                                        alt="Demo" 
                                        sx={{
                                            transition: 'transform 0.5s ease',
                                            '&:hover': {
                                                transform: 'scale(1.03)'
                                            }
                                        }}
                                    />
                                </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Testimonios */}
            <Box sx={{ 
                py: 8, 
                backgroundColor: colors.light
            }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom sx={{ 
                        fontWeight: 'bold',
                        color: colors.dark,
                        mb: 6,
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            width: '80px',
                            height: '4px',
                            backgroundColor: colors.primary,
                            margin: '20px auto 0'
                        }
                    }}>
                        Lo que dicen nuestros clientes
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            {
                                name: "Carlos Méndez",
                                role: "CEO, RetailTech",
                                avatar: "C",
                                comment: "Implementamos su software y en 3 meses aumentamos nuestra productividad en un 40%.",
                                rating: 5
                            },
                            {
                                name: "Ana Rodríguez",
                                role: "Directora de Operaciones",
                                avatar: "A",
                                comment: "El soporte técnico es excepcional. Siempre están disponibles cuando los necesitamos.",
                                rating: 5
                            },
                            {
                                name: "Luis Fernández",
                                role: "Gerente TI",
                                avatar: "L",
                                comment: "La solución más completa que hemos encontrado en el mercado a un precio competitivo.",
                                rating: 4
                            }
                        ].map((testimonial, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <motion.div whileHover={{ y: -5 }}>
                                    <Paper elevation={3} sx={{ 
                                        p: 3, 
                                        height: '100%',
                                        backgroundColor: colors.white,
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: `0 10px 25px rgba(255, 45, 85, 0.1)`
                                        }
                                    }}>
                                        <Box sx={{ display: 'flex', mb: 2 }}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    sx={{ 
                                                        color: i < testimonial.rating ? colors.accent : colors.light,
                                                        fontSize: '1.2rem'
                                                    }} 
                                                />
                                            ))}
                                        </Box>
                                        <Typography variant="body1" sx={{ 
                                            mb: 3, 
                                            fontStyle: 'italic',
                                            color: colors.dark,
                                            fontSize: '1.1rem'
                                        }}>
                                            "{testimonial.comment}"
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ 
                                                bgcolor: colors.primary, 
                                                mr: 2,
                                                color: colors.white,
                                                fontWeight: 'bold'
                                            }}>
                                                {testimonial.avatar}
                                            </Avatar>
                                            <Box>
                                                <Typography variant="subtitle1" sx={{ 
                                                    fontWeight: 'bold',
                                                    color: colors.dark
                                                }}>
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ 
                                                    color: colors.dark,
                                                    opacity: 0.7
                                                }}>
                                                    {testimonial.role}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ 
                py: 10,
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                color: colors.white,
                textAlign: "center",
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    zIndex: 1
                }
            }}>
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h3" gutterBottom sx={{ 
                            fontWeight: 'bold',
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}>
                            ¿Listo para transformar tu negocio?
                        </Typography>
                        <Typography variant="h5" gutterBottom sx={{ 
                            mb: 4,
                            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}>
                            Contáctanos hoy mismo y descubre cómo podemos ayudarte
                        </Typography>
                        <Button 
                            variant="contained" 
                            size="large"
                            endIcon={<Email />}
                            sx={{ 
                                px: 6, 
                                py: 1.5, 
                                fontSize: '1.1rem',
                                backgroundColor: colors.accent,
                                color: colors.dark,
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: colors.accent,
                                    transform: 'translateY(-2px)',
                                    boxShadow: `0 4px 12px ${colors.accent}`
                                }
                            }}
                        >
                            Solicitar Demo
                        </Button>
                    </motion.div>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ 
                py: 6, 
                backgroundColor: colors.dark,
                color: colors.white
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom sx={{ 
                                fontWeight: 'bold',
                                color: colors.white
                            }}>
                                Foog Technology
                            </Typography>
                            <Typography variant="body2" sx={{ 
                                mb: 2,
                                color: 'rgba(255,255,255,0.7)'
                            }}>
                                Soluciones tecnológicas para impulsar tu negocio al siguiente nivel.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                <IconButton 
                                    sx={{ 
                                        color: colors.white,
                                        '&:hover': {
                                            color: colors.primary,
                                            backgroundColor: 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                >
                                    <GitHub />
                                </IconButton>
                                <IconButton 
                                    sx={{ 
                                        color: colors.white,
                                        '&:hover': {
                                            color: colors.primary,
                                            backgroundColor: 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                >
                                    <LinkedIn />
                                </IconButton>
                                <IconButton 
                                    sx={{ 
                                        color: colors.white,
                                        '&:hover': {
                                            color: colors.primary,
                                            backgroundColor: 'rgba(255,255,255,0.1)'
                                        }
                                    }}
                                >
                                    <Twitter />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" gutterBottom sx={{ 
                                fontWeight: 'bold',
                                color: colors.white
                            }}>
                                Producto
                            </Typography>
                            <List dense>
                                {['Características', 'Precios', 'Demo', 'Integraciones'].map((item) => (
                                    <ListItem key={item} sx={{ px: 0 }}>
                                        <ListItemText 
                                            primary={item} 
                                            sx={{ 
                                                color: 'rgba(255,255,255,0.7)',
                                                '&:hover': {
                                                    color: colors.white,
                                                    cursor: 'pointer'
                                                }
                                            }} 
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Typography variant="subtitle1" gutterBottom sx={{ 
                                fontWeight: 'bold',
                                color: colors.white
                            }}>
                                Empresa
                            </Typography>
                            <List dense>
                                {['Nosotros', 'Blog', 'Carreras', 'Contacto'].map((item) => (
                                    <ListItem key={item} sx={{ px: 0 }}>
                                        <ListItemText 
                                            primary={item} 
                                            sx={{ 
                                                color: 'rgba(255,255,255,0.7)',
                                                '&:hover': {
                                                    color: colors.white,
                                                    cursor: 'pointer'
                                                }
                                            }} 
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="subtitle1" gutterBottom sx={{ 
                                fontWeight: 'bold',
                                color: colors.white
                            }}>
                                Contacto
                            </Typography>
                            <List dense>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '36px', color: colors.primary }}>
                                        <Email fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary="contacto@foog.cl" 
                                        sx={{ color: 'rgba(255,255,255,0.7)' }} 
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '36px', color: colors.primary }}>
                                        <Phone fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary="+56 (9) 3357-1879" 
                                        sx={{ color: 'rgba(255,255,255,0.7)' }} 
                                    />
                                </ListItem>
                                <ListItem sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: '36px', color: colors.primary }}>
                                        <LocationOn fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText 
                                        primary="Las Dedaleras #3622" 
                                        sx={{ color: 'rgba(255,255,255,0.7)' }} 
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Divider sx={{ 
                        my: 4, 
                        backgroundColor: 'rgba(255,255,255,0.1)' 
                    }} />
                    <Typography variant="body2" align="center" sx={{ 
                        color: 'rgba(255,255,255,0.5)'
                    }}>
                        © {new Date().getFullYear()} Foog Technology. Todos los derechos reservados.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;