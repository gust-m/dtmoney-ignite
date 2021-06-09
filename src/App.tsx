import { useCallback, useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>new transaction</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
};
