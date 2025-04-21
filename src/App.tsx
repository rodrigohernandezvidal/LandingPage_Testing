import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading para mejor performance
const Navbar = lazy(() => import('./components/Navbar'));
import LandingPage from './pages/landingPage';
const Footer = lazy(() => import('./components/Footer'));
const AuthModule = lazy(() => import('./modules/auth'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner fullPage />}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              {/* Ruta principal */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Rutas de autenticación */}
              <Route path="/auth/*" element={<AuthModule />} />
              
              {/* Redirección para rutas no encontradas */}
              <Route path="*" element={
                <div className="max-w-4xl mx-auto p-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Página no encontrada</h2>
                  <p className="text-gray-600 mb-6">Serás redirigido a la página principal...</p>
                  <Navigate to="/" replace />
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;