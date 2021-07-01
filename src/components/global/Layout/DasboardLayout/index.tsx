import React from 'react';
import { DashboardRoot, ContentBox } from './styled';
import Sidebar from '@components/Navigation/Sidebar';

type DashboardLayoutProps = {
  EditingComponent?: React.ReactNode;
  PreviewComponent?: React.ReactNode;
};

const DashboardLayout = ({
  EditingComponent,
  PreviewComponent,
}: DashboardLayoutProps) => (
  <DashboardRoot>
    <Sidebar />
    <ContentBox>
      <section>{EditingComponent}</section>
      <section>{PreviewComponent}</section>
    </ContentBox>
  </DashboardRoot>
);

export default DashboardLayout;
