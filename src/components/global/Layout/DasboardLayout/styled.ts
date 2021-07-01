import styled from 'styled-components';

export const DashboardRoot = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 64px 1fr;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ContentBox = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 0.6fr;
  overflow: hidden;

  & > section {
    overflow: hidden;
  }
`;
