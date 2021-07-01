import React from 'react';
import styled from 'styled-components';

const SidebarRoot = styled.aside`
  height: 100%;
  overflow-y: auto;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 6px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};

  img {
    width: 24px;
  }
`;

const Sidebar = () => (
  <SidebarRoot>
    <img src='/logo.svg' alt='logo' />
  </SidebarRoot>
);

export default Sidebar;
