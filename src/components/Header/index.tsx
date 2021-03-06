import { useModal } from '../../hooks/useModal';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export const Header: React.FC = () => {
  const { handleOpenNewTransactionModal } = useModal();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
