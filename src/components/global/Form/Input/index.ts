import styled from 'styled-components';

type InputProps = {
  fullWidth?: boolean;
  size?: 'sm' | 'md';
  error?: boolean;
};

const Input = styled.input.attrs(() => ({ size: 'md' }))<InputProps>`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[400]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.base};

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ error, theme }) =>
    error &&
    `
     box-shadow: 0 0 0 2px ${theme.colors.danger};
     `}

  ${({ disabled }) =>
    disabled &&
    `
        opacity: 0.4;
        & > * {
          cursor: not-allowed;
        }
      `}
  
  ${({ size, theme }) =>
    size === 'sm' &&
    `
    min-height: 32px;
    padding: 6px 12px;
    font-size: ${theme.fontSizes.sm.size};
  `}

  ${({ size, theme }) =>
    size === 'md' &&
    `
    font-size: ${theme.fontSizes.sm.size};
    min-height: 42px;
    padding: 8px 16px;
  `}
`;

export default Input;
