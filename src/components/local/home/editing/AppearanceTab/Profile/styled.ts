import styled from 'styled-components';

export const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 20px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray[200]};
`;

export const HeadingBox = styled.div`
  & > div {
    margin-top: 12px;
    display: grid;
    gap: 16px;
  }

  label {
    cursor: pointer;

    button {
      pointer-events: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
    align-items: center;
    gap: 20px;

    & > div {
      flex: 1;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 0;
    }
  }
`;

export const InputsBox = styled.div`
  display: grid;
  gap: 16px;
`;
