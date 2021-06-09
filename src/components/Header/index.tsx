import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface Request {
  onOpenNewTransactionModal(): void;
}

export const Header: React.FC<Request> = ({
  onOpenNewTransactionModal,
}: Request) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
