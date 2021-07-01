import React from 'react';
import styled from 'styled-components';
import PreviewLive from '@localComponents/home/previewLive';

const PreviewRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const Preview = () => (
  <PreviewRoot>
    <PreviewLive />
  </PreviewRoot>
);

export default Preview;
