import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

type ModalContextData = {
  isNewTransactionModalOpen: boolean;
  handleOpenNewTransactionModal: () => void;
  handleCloseNewTransactionModal: () => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext({} as ModalContextData);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps): JSX.Element => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isNewTransactionModalOpen,
        handleOpenNewTransactionModal,
        handleCloseNewTransactionModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  return context;
};
