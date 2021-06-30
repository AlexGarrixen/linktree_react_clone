import React from 'react';
import Title from '@components/DataDisplay/Title';
import Text from '@components/DataDisplay/Text';
import Button from '@components/Form/Button';
import IconButton from '@components/Form/IconButton';
import Trash from '@components/Icon/TrashOutlined';
import Switch from '@components/Form/Switch';

const Dashboard = () => (
  <div>
    <Title colorScheme='secondary'>Title</Title>
    <Text colorScheme='secondary'>Text</Text>
    <Button colorScheme='primary'>Filled</Button>
    <Button variant='outlined' colorScheme='primary'>
      Outlined
    </Button>
    <IconButton>
      <Trash size={26} />
    </IconButton>
    <Switch colorScheme='success' />
  </div>
);

export default Dashboard;
