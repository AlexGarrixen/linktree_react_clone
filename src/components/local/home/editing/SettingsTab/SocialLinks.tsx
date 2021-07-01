import React from 'react';
import styled from 'styled-components';
import Title from '@components/DataDisplay/Title';
import Input from '@components/Form/Input';
import Spacing from '@components/Layout/Spacing';

const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 20px;
  margin-top: 30px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray[200]};

  & > div {
    display: grid;
    gap: 26px;
  }
`;

const SocialLinks = () => (
  <section>
    <Title size={{ xs: 'sm', sm: 'lg', md: 'xl' }}>Redes Sociales</Title>
    <ContentBox>
      <div>
        <div>
          <Title level='6'>Facebook</Title>
          <Spacing size={8} />
          <Input placeholder='Facebook url' fullWidth />
        </div>
        <div>
          <Title level='6'>Twitter</Title>
          <Spacing size={8} />
          <Input placeholder='Twitter url' fullWidth />
        </div>
        <div>
          <Title level='6'>Instagram</Title>
          <Spacing size={8} />
          <Input placeholder='Instagram url' fullWidth />
        </div>
      </div>
    </ContentBox>
  </section>
);

export default SocialLinks;
