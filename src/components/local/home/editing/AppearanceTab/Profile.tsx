import React from 'react';
import styled from 'styled-components';
import Title from '@components/DataDisplay/Title';
import Avatar from '@components/Media/Avatar';
import Button from '@components/Form/Button';
import Input from '@components/Form/Input';
import Spacing from '@components/Layout/Spacing';

const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 20px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray[200]};
`;

const HeadingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > div {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  label {
    cursor: pointer;

    button {
      pointer-events: none;
    }
  }
`;

const InputsBox = styled.div`
  display: grid;
  gap: 16px;
`;

const Profile = () => (
  <section>
    <Title size={{ xs: 'sm', sm: 'lg', md: 'xl' }}>Perfil</Title>
    <Spacing size={30} />
    <ContentBox>
      <HeadingBox>
        <Avatar
          src='https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg_400x400.png'
          alt='avatar'
          size={60}
        />
        <div>
          <label htmlFor='in-avatar'>
            <Button colorScheme='primary' fullWidth>
              Seleccionar imagen
            </Button>
          </label>
          <input
            type='file'
            style={{ display: 'none' }}
            id='in-avatar'
            accept='image/*'
          />
          <Button>Remover</Button>
        </div>
      </HeadingBox>
      <Spacing size={24} />
      <InputsBox>
        <div>
          <Title level='6'>Nombre de usuario</Title>
          <Spacing size={8} />
          <Input type='text' placeholder='Nombre de usuario' fullWidth />
        </div>
        <div>
          <Title level='6'>Descripcion</Title>
          <Spacing size={8} />
          <Input as='textarea' rows={8} placeholder='descripcion' fullWidth />
        </div>
      </InputsBox>
    </ContentBox>
  </section>
);

export default Profile;
