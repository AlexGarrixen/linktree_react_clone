import styled from 'styled-components';

export const EditingRoot = styled.div`
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  flex-direction: column;
`;

export const TabsBox = styled.div`
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const ContentBox = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;

  & > div {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }
`;
