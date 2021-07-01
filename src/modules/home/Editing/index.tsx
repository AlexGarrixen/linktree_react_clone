import React, { useState } from 'react';
import Tabs, { Tab } from '@components/Navigation/Tabs';
import LinksTab from '@localComponents/home/editing/LinksTab';
import AppearanceTab from '@localComponents/home/editing/AppearanceTab';
import SettingsTab from '@localComponents/home/editing/SettingsTab';
import { EditingRoot, TabsBox, ContentBox } from './styled';

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
