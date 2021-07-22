import { useCallback, useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';

import { useModal } from '../../hooks/useModal';
import { useTransactions } from '../../hooks/useTransactions';

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

export const NewTransactionModal = () => {
  const [transactionType, setTransactionsType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const { isNewTransactionModalOpen, handleCloseNewTransactionModal } =
    useModal();

  const { addTransaction, transactions } = useTransactions();

  const handleSelectIncome = useCallback(() => {
    setTransactionsType('deposit');
  }, []);

  const handleSelectOutcome = useCallback(() => {
    setTransactionsType('withdraw');
  }, []);

  const handleSubmitForm = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const transaction = {
        title,
        value,
        category,
        transactionType,
        id: Math.floor(
          Math.random() * (99 - transactions.length) + transactions.length,
        ),
        createdAt: new Date(),
      };

      await addTransaction(transaction);
      handleCloseNewTransactionModal();
      setTitle('');
      setValue(0);
      setCategory('');
      setTransactionsType('deposit');
    },
    [
      addTransaction,
      category,
      handleCloseNewTransactionModal,
      title,
      transactionType,
      transactions.length,
      value,
    ],
  );

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react_modal_overlay"
      className="react_content"
    >
      <Container onSubmit={event => handleSubmitForm(event)}>
        <h1>Cadastrar transação</h1>
        <Input
          placeholder="Título"
          onChange={event => setTitle(event.target.value)}
          value={title}
        />
        <Input
          placeholder="Valor"
          type="number"
          onChange={event => setValue(Number(event.target.value))}
          value={value}
        />
        <TransactionTypeContainer transactionsType={transactionType}>
          <Button type="button" onClick={handleSelectIncome}>
            <img src={incomeImg} alt="Entrada" />
            <p>Entrada</p>
          </Button>
          <Button type="button" onClick={handleSelectOutcome}>
            <img src={outcomeImg} alt="Saída" />
            <p>Saída</p>
          </Button>
        </TransactionTypeContainer>
        <Input
          placeholder="Categoria"
          onChange={event => setCategory(event.target.value)}
          value={category}
        />
        <RegisterButton>Cadastrar</RegisterButton>
        <button type="button" onClick={handleCloseNewTransactionModal}>
          <img src={closeIcon} alt="Fechar modal" />
        </button>
      </Container>
    </Modal>
  );
};
