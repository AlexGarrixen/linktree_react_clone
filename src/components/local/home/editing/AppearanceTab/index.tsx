import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Themes from './Themes';

const AppearanceTabRoot = styled.div`
  display: grid;
  gap: 48px;
`;

const AppearanceTab = () => (
  <AppearanceTabRoot>
    <Profile />
    <Themes />
  </AppearanceTabRoot>
);

export default AppearanceTab;
