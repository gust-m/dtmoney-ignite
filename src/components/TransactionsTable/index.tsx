import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Almoço</td>
            <td className="withdraw">R$150</td>
            <td>Comida</td>
            <td>01/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="income">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>03/02/2021</td>
          </tr>
          <tr>
            <td>Viagem</td>
            <td className="withdraw">R$2.000</td>
            <td>Lazer</td>
            <td>15/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
