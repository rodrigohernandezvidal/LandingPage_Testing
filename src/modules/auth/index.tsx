import React from 'react';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './components/LoginForm'; // Importación por defecto
import { Routes, Route, useNavigate } from 'react-router-dom';

const AuthModule = () => {
  const [isClientModalOpen, setIsClientModalOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClientLoginClick = () => {
    setIsClientModalOpen(true);
  };

  const handleCloseClientModal = () => {
    setIsClientModalOpen(false);
  };

  const handleLoginSuccess = () => {
    navigate('/dashboard'); // Redirige después del login exitoso
  };

  return (
    <div className="auth-container">
      <ToastContainer position="top-right" autoClose={5000} />
      
      <Routes>
        <Route 
          path="/login" 
          element={
            <LoginForm 
              onClientLoginClick={handleClientLoginClick}
              onLoginSuccess={handleLoginSuccess}
            />
          } 
        />
        <Route path="/" element={<div>Página de inicio de auth</div>} />
      </Routes>

      {/* Modal para cliente */}
      {isClientModalOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>
            <h2>Modal de Cliente</h2>
            <button onClick={handleCloseClientModal}>Cerrar</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default AuthModule;