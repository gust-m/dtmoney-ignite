import Modal from 'react-modal';
import { useCallback, useState } from 'react';
import {
  Container,
  Input,
  TransactionTypeContainer,
  Button,
  RegisterButton,
} from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeIcon from '../../assets/close.svg';

interface ModalProps {
  onRequestClose: () => void;
  isOpen: boolean;
}

export const NewTransactionModal = ({ onRequestClose, isOpen }: ModalProps) => {
  const [depositType, setDepositType] = useState('deposit');

  const handleSelectIncome = useCallback(() => {
    setDepositType('deposit');
  }, []);

  const handleSelectOutcome = useCallback(() => {
    setDepositType('withdraw');
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react_modal_overlay"
      className="react_content"
    >
      <Container>
        <h1>Cadastrar transação</h1>
        <Input placeholder="Título" />
        <Input placeholder="Valor" type="number" />
        <TransactionTypeContainer depositType={depositType}>
          <Button type="button" onClick={handleSelectIncome}>
            <img src={incomeImg} alt="Entrada" />
            <p>Entrada</p>
          </Button>
          <Button type="button" onClick={handleSelectOutcome}>
            <img src={outcomeImg} alt="Saída" />
            <p>Saída</p>
          </Button>
        </TransactionTypeContainer>
        <Input placeholder="Categoria" />
        <RegisterButton>Cadastrar</RegisterButton>
        <button type="button" onClick={onRequestClose}>
          <img src={closeIcon} alt="Fechar modal" />
        </button>
      </Container>
    </Modal>
  );
};
