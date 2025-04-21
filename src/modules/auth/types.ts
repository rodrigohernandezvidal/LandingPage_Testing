export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: 'admin' | 'user' | 'client';
    empresa?: boolean;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface ClientLoginCredentials {
    email: string;
    token: string;
  }