import React from 'react';
import DashboardLayout from '@components/Layout/DasboardLayout';
import Editing from '@modules/home/Editing';
import Preview from '@modules/home/Preview';

const Dashboard = () => (
  <DashboardLayout
    EditingComponent={<Editing />}
    PreviewComponent={<Preview />}
  />
);

export default Dashboard;
