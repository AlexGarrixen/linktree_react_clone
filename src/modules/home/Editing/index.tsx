import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs, { Tab } from '@components/Navigation/Tabs';
import LinksTab from '@localComponents/home/editing/LinksTab';
import AppearanceTab from '@localComponents/home/editing/AppearanceTab';
import SettingsTab from '@localComponents/home/editing/SettingsTab';

const EditingRoot = styled.div`
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  flex-direction: column;
`;

const TabsBox = styled.div`
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const ContentBox = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;

  & > div {
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Editing = () => {
  const [tabActive, setTabActive] = useState('links');

  return (
    <EditingRoot>
      <TabsBox>
        <Tabs
          colorScheme='secondary'
          value={tabActive}
          size='lg'
          onChangeTab={(value) => setTabActive(value as string)}
        >
          <Tab value='links'>Links</Tab>
          <Tab value='appearance'>Apariencia</Tab>
          <Tab value='settings'>Configuracion</Tab>
        </Tabs>
      </TabsBox>
      <ContentBox>
        <div>
          {tabActive === 'links' && <LinksTab />}
          {tabActive === 'appearance' && <AppearanceTab />}
          {tabActive === 'settings' && <SettingsTab />}
        </div>
      </ContentBox>
    </EditingRoot>
  );
};

export default Editing;
