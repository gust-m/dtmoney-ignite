import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();
  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.transactionType === 'deposit') {
        accumulator.deposit += transaction.value;
        accumulator.balance += transaction.value;
      } else if (transaction.transactionType === 'withdraw') {
        accumulator.outcome += transaction.value;
        accumulator.balance -= transaction.value;
      }

      return accumulator;
    },
    {
      deposit: 0,
      outcome: 0,
      balance: 0,
    },
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposit)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.outcome)}
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.balance)}
        </strong>
      </div>
    </Container>
  );
};
