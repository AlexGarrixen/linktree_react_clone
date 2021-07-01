import styled from 'styled-components';

export const DashboardRoot = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 64px 1fr;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const ContentBox = styled.div`
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 0.6fr;

    & > section {
      overflow-y: hidden;
    }
  }
`;
