import styled from 'styled-components';

export const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 20px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray[200]};
`;

export const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > div {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  label {
    cursor: pointer;

    button {
      pointer-events: none;
    }
  }
`;

export const InputsBox = styled.div`
  display: grid;
  gap: 16px;
`;
