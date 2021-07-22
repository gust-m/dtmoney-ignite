import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';

type TransactionsType = {
  id: number;
  title: string;
  value: number;
  transactionType: string;
  category: string;
  createdAt: Date;
};

type TransactionsContextProviderProps = {
  children: ReactNode;
};

type TransactionContext = {
  transactions: TransactionsType[];
  addTransaction: (transaction: TransactionsType) => Promise<void>;
};

const TransactionsContext = createContext<TransactionContext>(
  {} as TransactionContext,
);

export const TransactionsContextProvider = ({
  children,
}: TransactionsContextProviderProps): JSX.Element => {
  const [transactions, setTransactions] = useState<TransactionsType[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      const response = await api.get('/transactions');
      setTransactions(response.data.transactions);
    };

    getTransactions();
  }, []);

  const addTransaction = useCallback(
    async (transaction: TransactionsType) => {
      await api.post('/transactions', transaction);

      setTransactions([transaction, ...transactions]);
    },
    [transactions],
  );

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = (): TransactionContext => {
  const context = useContext(TransactionsContext);

  return context;
};
