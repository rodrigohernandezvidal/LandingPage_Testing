import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  TextField,
  Modal,
  Typography,
  Snackbar,
  Alert,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  Checkbox,
  LinearProgress,
  Chip,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import {
  Add,
  Delete,
  Edit,
  Close,
  Dashboard as DashboardIcon,
  LocationOn as LocationOnIcon,
  Inventory2,
  AttachMoney,
  Search
} from '@mui/icons-material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Tema personalizado moderno
const theme = createTheme({
  palette: {
    primary: { main: '#4a6bff' },
    secondary: { main: '#ff5c8d' },
    background: { default: '#f8fafc' },
    text: { primary: '#2d3748' }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h4: { 
      fontWeight: 700,
      fontSize: '2rem',
      color: '#2d3748'
    },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px'
        }
      }
    }
  }
});

// Datos iniciales
const initialItems = [
  { id: 1, name: 'Monitor Dell U2719D', location: 'OF/Sala Reuniones', quantity: 25, available: 10, price: 399.99 },
  { id: 2, name: 'Mouse Logitech MX Master 3', location: 'OF/Sala Reuniones', quantity: 50, available: 10, price: 99.99 },
  { id: 3, name: 'Teclado Mecánico Razer BlackWidow', location: 'OF/Oficina Central', quantity: 15, available: 10, price: 129.99 },
  { id: 4, name: 'Auriculares Sony WH-1000XM4', location: 'OF/Oficina Central', quantity: 30, available: 10, price: 349.99 },
  { id: 5, name: 'Laptop HP Spectre x360', location: 'OF/Hall Central', quantity: 20, available: 10, price: 1499.99 },
  { id: 6, name: 'Cargador Anker PowerPort', location: 'OF/Hall Central', quantity: 100, available: 10, price: 24.99 },
  { id: 7, name: 'USB Kingston DataTraveler 64GB', location: 'OF/Sala Espera', quantity: 200, available: 10, price: 19.99 },
  { id: 8, name: 'Disco Duro Externo Seagate 1TB', location: 'OF/Sala Espera', quantity: 35, available: 10, price: 69.99 },
];

// Componente para las tarjetas de estadísticas
const StatCard = ({ title, value, icon, color }) => (
  <Paper sx={{ 
    p: 2, 
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  }}>
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        {title}
      </Typography>
      <Box sx={{ 
        backgroundColor: `${color}20`,
        color: color,
        p: 1,
        borderRadius: '8px'
      }}>
        {React.cloneElement(icon, { fontSize: 'small' })}
      </Box>
    </Box>
    <Typography variant="h5" sx={{ fontWeight: 700 }}>
      {value}
    </Typography>
  </Paper>
);

const Income = () => {
  const [items, setItems] = useState(initialItems);
  const [openModal, setOpenModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const itemsPerPage = 5;
  const uniqueLocations = [...new Set(initialItems.map((item) => item.location))];

  // Función para ordenar los items
  const sortedItems = [...items].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Filtrar items
  const filteredItems = sortedItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation ? item.location === selectedLocation : true;
    return matchesSearch && matchesLocation;
  });

  // Items a mostrar en la página actual
  const displayedItems = filteredItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Manejar solicitud de ordenamiento
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Abrir modal para editar/crear
  const handleOpenModal = (item = null) => {
    setCurrentItem(item || { 
      name: '', 
      location: uniqueLocations[0], 
      quantity: '', 
      available: '', 
      price: '' 
    });
    setOpenModal(true);
  };

  // Cerrar modal
  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentItem(null);
  };

  // Guardar item
  const handleSaveItem = () => {
    if (currentItem.id) {
      setItems(items.map((item) => (item.id === currentItem.id ? currentItem : item)));
      setNotification({ type: 'success', message: 'Artículo actualizado correctamente' });
    } else {
      const newItem = { 
        ...currentItem, 
        id: Math.max(...items.map(item => item.id)) + 1,
        quantity: Number(currentItem.quantity),
        available: Number(currentItem.available),
        price: Number(currentItem.price)
      };
      setItems([...items, newItem]);
      setNotification({ type: 'success', message: 'Artículo agregado correctamente' });
    }
    handleCloseModal();
  };

  // Eliminar item
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setNotification({ type: 'error', message: 'Artículo eliminado' });
  };

  // Eliminar items seleccionados
  const handleDeleteSelected = () => {
    setItems(items.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]);
    setNotification({ type: 'error', message: 'Artículos seleccionados eliminados' });
  };

  // Cambiar página
  const handlePageChange = (_, value) => {
    setPage(value);
  };

  // Manejar selección de checkbox
  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filtrar por ubicación
  const handleLocationFilter = (location) => {
    setSelectedLocation(location);
    setPage(1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        minHeight: '100vh',
        backgroundColor: '#f8fafc'
      }}>
        {/* Sidebar */}
        <Box sx={{
          width: '280px',
          backgroundColor: 'white',
          padding: 3,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 600, 
            color: 'primary.main',
            mb: 2
          }}>
            Filtros
          </Typography>
          
          <TextField
            size="small"
            label="Buscar artículo"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />
          
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            Ubicaciones
          </Typography>
          
          <Button
            fullWidth
            variant={selectedLocation === null ? 'contained' : 'text'}
            onClick={() => handleLocationFilter(null)}
            sx={{ 
              justifyContent: 'flex-start',
              px: 2,
              borderRadius: '6px'
            }}
            startIcon={<DashboardIcon />}
          >
            Todas las ubicaciones
          </Button>
          
          {uniqueLocations.map((location) => (
            <Button
              key={location}
              fullWidth
              variant={selectedLocation === location ? 'contained' : 'text'}
              onClick={() => handleLocationFilter(location)}
              sx={{ 
                justifyContent: 'flex-start',
                px: 2,
                borderRadius: '6px'
              }}
              startIcon={<LocationOnIcon />}
            >
              {location}
            </Button>
          ))}
        </Box>

        {/* Main Content */}
        <Box sx={{ 
          flex: 1, 
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Gestión de Inventario
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => handleOpenModal()}
              >
                Nuevo Artículo
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                startIcon={<AssessmentIcon />}
              >
                Generar Reporte
              </Button>
            </Box>
          </Box>
          
          {/* Estadísticas */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 2,
            mb: 3
          }}>
            <StatCard 
              title="Total Artículos" 
              value={items.length} 
              icon={<Inventory2 />} 
              color="#4a6bff"
            />
            <StatCard 
              title="Ubicaciones" 
              value={uniqueLocations.length} 
              icon={<LocationOnIcon />} 
              color="#ff5c8d"
            />
            <StatCard 
              title="Valor Total" 
              value={`$${items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`} 
              icon={<AttachMoney />} 
              color="#10b981"
            />
          </Box>

          {/* Tabla */}
          <Paper sx={{ 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}>
            <TableContainer sx={{ maxHeight: 'calc(100vh - 300px)' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow sx={{ 
                    '& th': { 
                      backgroundColor: 'primary.main',
                      color: 'white',
                      fontWeight: 600
                    }
                  }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        indeterminate={
                          selectedItems.length > 0 && 
                          selectedItems.length < displayedItems.length
                        }
                        checked={
                          displayedItems.length > 0 &&
                          selectedItems.length === displayedItems.length
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedItems(displayedItems.map((item) => item.id));
                          } else {
                            setSelectedItems([]);
                          }
                        }}
                        sx={{ color: 'white' }}
                      />
                    </TableCell>
                    <TableCell 
                      onClick={() => requestSort('name')}
                      sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'primary.dark' } }}
                    >
                      Nombre
                      {sortConfig.key === 'name' && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </TableCell>
                    <TableCell 
                      onClick={() => requestSort('location')}
                      sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'primary.dark' } }}
                    >
                      Ubicación
                      {sortConfig.key === 'location' && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </TableCell>
                    <TableCell 
                      align="right"
                      onClick={() => requestSort('quantity')}
                      sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'primary.dark' } }}
                    >
                      Cantidad
                      {sortConfig.key === 'quantity' && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </TableCell>
                    <TableCell 
                      align="right"
                      onClick={() => requestSort('available')}
                      sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'primary.dark' } }}
                    >
                      Disponibles
                      {sortConfig.key === 'available' && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </TableCell>
                    <TableCell 
                      align="right"
                      onClick={() => requestSort('price')}
                      sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'primary.dark' } }}
                    >
                      Precio
                      {sortConfig.key === 'price' && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedItems.map((item) => (
                    <TableRow 
                      key={item.id}
                      hover
                      sx={{ 
                        '&:last-child td': { borderBottom: 0 },
                        '&:hover': { backgroundColor: 'action.hover' }
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight={500}>{item.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={item.location} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'primary.light', 
                            color: 'primary.contrastText' 
                          }} 
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Box sx={{ 
                          display: 'inline-flex', 
                          alignItems: 'center',
                          gap: 1
                        }}>
                          {item.quantity}
                          <LinearProgress 
                            variant="determinate" 
                            value={(item.available / item.quantity) * 100} 
                            sx={{ 
                              width: '60px',
                              height: '6px',
                              borderRadius: '3px',
                              backgroundColor: 'grey.200',
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: item.available > 0 ? 'success.main' : 'error.main'
                              }
                            }} 
                          />
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        <Typography 
                          color={item.available > 0 ? 'success.main' : 'error.main'}
                          fontWeight={500}
                        >
                          {item.available}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontWeight={500}>
                          ${item.price.toFixed(2)}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Editar">
                          <IconButton 
                            color="primary"
                            onClick={() => handleOpenModal(item)}
                            sx={{ '&:hover': { backgroundColor: 'primary.light' } }}
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar">
                          <IconButton 
                            color="error"
                            onClick={() => handleDeleteItem(item.id)}
                            sx={{ '&:hover': { backgroundColor: 'error.light' } }}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* Pie de página con paginación y botón de eliminación */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2
          }}>
            <Button
              variant="contained"
              color="error"
              startIcon={<Delete />}
              disabled={selectedItems.length === 0}
              onClick={handleDeleteSelected}
              sx={{ visibility: selectedItems.length > 0 ? 'visible' : 'hidden' }}
            >
              Eliminar seleccionados ({selectedItems.length})
            </Button>
            
            <Pagination
              count={Math.ceil(filteredItems.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
            />
          </Box>
        </Box>

        {/* Modal para agregar/editar */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: '12px',
              outline: 'none'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3
            }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                {currentItem?.id ? 'Editar Artículo' : 'Nuevo Artículo'}
              </Typography>
              <IconButton onClick={handleCloseModal}>
                <Close />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                fullWidth
                label="Nombre del artículo"
                variant="outlined"
                size="small"
                value={currentItem?.name || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
              />
              
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                <TextField
                  fullWidth
                  label="Cantidad total"
                  type="number"
                  variant="outlined"
                  size="small"
                  value={currentItem?.quantity || ''}
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                />
                <TextField
                  fullWidth
                  label="Disponibles"
                  type="number"
                  variant="outlined"
                  size="small"
                  value={currentItem?.available || ''}
                  onChange={(e) => setCurrentItem({ ...currentItem, available: e.target.value })}
                />
              </Box>
              
              <TextField
                fullWidth
                label="Precio unitario"
                type="number"
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                value={currentItem?.price || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, price: e.target.value })}
              />
              
              <FormControl fullWidth size="small">
                <InputLabel>Ubicación</InputLabel>
                <Select
                  value={currentItem?.location || uniqueLocations[0]}
                  label="Ubicación"
                  onChange={(e) => setCurrentItem({ ...currentItem, location: e.target.value })}
                >
                  {uniqueLocations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <Button 
                variant="contained" 
                onClick={handleSaveItem}
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                {currentItem?.id ? 'Actualizar Artículo' : 'Guardar Artículo'}
              </Button>
            </Box>
          </Box>
        </Modal>

        {/* Notificaciones */}
        <Snackbar
          open={!!notification}
          autoHideDuration={3000}
          onClose={() => setNotification(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            elevation={6}
            variant="filled"
            severity={notification?.type}
            sx={{ width: '100%' }}
            onClose={() => setNotification(null)}
          >
            {notification?.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

export default Income;