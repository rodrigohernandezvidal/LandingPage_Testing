import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

const ClientLoginModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [credentials, setCredentials] = useState({ email: '', token: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { clientLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await clientLogin(credentials);
    setIsLoading(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="center">
      <ModalContent>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <ModalHeader className="flex flex-col gap-1 text-xl font-semibold">
            Acceso para Clientes
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                isRequired
                type="email"
                label="Email"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              />
              
              <Input
                isRequired
                type="text"
                label="Token de Acceso"
                value={credentials.token}
                onChange={(e) => setCredentials({...credentials, token: e.target.value})}
              />
              
              <div className="flex justify-end pt-2">
                <Button 
                  type="submit" 
                  color="primary" 
                  isLoading={isLoading}
                  className="w-full"
                >
                  Ingresar
                </Button>
              </div>
            </form>
          </ModalBody>
        </motion.div>
      </ModalContent>
    </Modal>
  );
};

export default ClientLoginModal;