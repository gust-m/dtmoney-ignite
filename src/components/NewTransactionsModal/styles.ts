import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  depositType: string;
}

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    margin-bottom: 1rem;
    color: var(--text-title);

    font-size: 1.5rem;
  }

  > button {
    &:last-child {
      position: absolute;
      right: 1.3125rem;
      top: 1.3125rem;

      background: transparent;
      border: 0;

      transition: filter 0.2s;

      > img {
        width: 14px;
        height: 14px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const Input = styled.input`
  padding: 0 1.5rem;
  height: 4rem;

  background: #e7e9ee;
  border: 1px solid #d7d7d7;

  font-size: 1rem;
  font-weight: 400;

  &::placeholder {
    color: var(--text-body);
  }
`;

export const Button = styled.button`
  height: 4rem;
  width: 100%;

  background: transparent;
  border: 1.5px solid #d7d7d7;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  img {
    width: 20px;
    height: 20px;
    margin-right: 18px;
  }

  p {
    color: var(--text-title);
    font-size: 1rem;
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;

  background: var(--green);
  border: 0;
  border-radius: 0.25rem;

  color: #fff;
  font-size: 1rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:hover {
    background: ${darken(0.05, '#33cc95')};
  }
`;

export const TransactionTypeContainer = styled.div<ButtonProps>`
  display: flex;
  justify-content: space-between;

  gap: 8px;

  ${props =>
    props.depositType === 'deposit'
      ? css`
          ${Button}:first-child {
            background: rgba(18, 164, 84, 0.2);
            border-color: ${darken(0.1, '#d7d7d7')};
          }
        `
      : css`
          ${Button}:last-child {
              background: rgba(230, 46, 77, 0.2);
              border-color: ${darken(0.1, '#d7d7d7')};
          `}
`;
