import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionsModal';
import { ModalContextProvider } from './hooks/useModal';
import { TransactionsContextProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export const App: React.FC = () => {
  return (
    <TransactionsContextProvider>
      <ModalContextProvider>
        <Header />
        <Dashboard />

        <NewTransactionModal />
      </ModalContextProvider>
      <GlobalStyle />
    </TransactionsContextProvider>
  );
};
