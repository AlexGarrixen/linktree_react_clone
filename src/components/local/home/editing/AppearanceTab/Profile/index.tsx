import React, { useContext } from 'react';
import Title from '@components/DataDisplay/Title';
import Avatar from '@components/Media/Avatar';
import Button from '@components/Form/Button';
import Input from '@components/Form/Input';
import Spacing from '@components/Layout/Spacing';
import { AppContext } from '@contexts/GlobalApp';
import { ContentBox, HeadingBox, InputsBox } from './styled';

const Profile = () => {
  const { state, dispatch } = useContext(AppContext);
  const profile = state.appearance.profile;

  const handleChangeInput = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    dispatch({ type: 'update:profile', payload: { [name]: value } });
  };

  const handlePickAvatar = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name } = ev.target;

    if (files[0]) {
      const urlImg = URL.createObjectURL(files[0]);
      dispatch({ type: 'update:profile', payload: { [name]: urlImg } });
    }
  };

  return (
    <section>
      <Title level='3' size={{ xs: 'lg', md: 'xl' }}>
        Perfil
      </Title>
      <Spacing size={30} />
      <ContentBox>
        <HeadingBox>
          <Avatar src={profile.avatar} alt='avatar' size={60} />
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
              onChange={handlePickAvatar}
              name='avatar'
            />
            <Button
              fullWidth
              onClick={() =>
                dispatch({ type: 'update:profile', payload: { avatar: '' } })
              }
            >
              Remover
            </Button>
          </div>
        </HeadingBox>
        <Spacing size={24} />
        <InputsBox>
          <div>
            <Title level='6'>Nombre de usuario</Title>
            <Spacing size={8} />
            <Input
              type='text'
              placeholder='Nombre de usuario'
              fullWidth
              value={profile.username}
              onChange={handleChangeInput}
              name='username'
            />
          </div>
          <div>
            <Title level='6'>Descripcion</Title>
            <Spacing size={8} />
            <Input
              as='textarea'
              rows={8}
              placeholder='descripcion'
              fullWidth
              value={profile.description}
              onChange={handleChangeInput}
              name='description'
            />
          </div>
        </InputsBox>
      </ContentBox>
    </section>
  );
};

export default Profile;
