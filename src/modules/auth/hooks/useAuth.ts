import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { User, LoginCredentials, ClientLoginCredentials } from '../types';

const API_URL = import.meta.env.VITE_API_URL_D;

const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/data/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      if (data.token) {
        const decoded: User = jwtDecode(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', decoded.email);
        localStorage.setItem('name', decoded.name);
        localStorage.setItem('id', decoded.id);
        localStorage.setItem('avatar', decoded.avatar || '');
        localStorage.setItem('IsEmpresa', String(decoded.empresa || false));
        
        toast.success('¡Bienvenido!');
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  const clientLogin = async (credentials: ClientLoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/data/loginClient`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          emailClient: credentials.email,
          tokenClient: credentials.token
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      if (data.token) {
        const decoded: User = jwtDecode(data.token);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', decoded.email);
        localStorage.setItem('name', decoded.name);
        localStorage.setItem('id', decoded.id);
        localStorage.setItem('IsEmpresa', String(decoded.empresa || false));
        
        toast.success('¡Bienvenido!');
        navigate('/clientSign');
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, clientLogin, isLoading };
};

export default useAuth;