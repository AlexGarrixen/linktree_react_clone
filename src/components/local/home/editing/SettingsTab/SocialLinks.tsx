import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import Title from '@components/DataDisplay/Title';
import Input from '@components/Form/Input';
import Spacing from '@components/Layout/Spacing';
import { AppContext } from '@contexts/GlobalApp';

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

const SocialLinks = () => {
  const { state, dispatch } = useContext(AppContext);
  const networks = state.config.social;

  const handleChangeInput = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = ev.target;
      dispatch({ type: 'update:social-networks', payload: { [name]: value } });
    },
    [networks]
  );

  return (
    <section>
      <Title size={{ xs: 'sm', sm: 'lg', md: 'xl' }}>Redes Sociales</Title>
      <ContentBox>
        <div>
          <div>
            <Title level='6'>Facebook</Title>
            <Spacing size={8} />
            <Input
              placeholder='https://facebook.com/user'
              fullWidth
              value={networks.facebook}
              name='facebook'
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Title level='6'>Twitter</Title>
            <Spacing size={8} />
            <Input
              placeholder='https://twitter.com/user'
              fullWidth
              value={networks.twitter}
              name='twitter'
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <Title level='6'>Instagram</Title>
            <Spacing size={8} />
            <Input
              placeholder='https://instagram.com/user'
              fullWidth
              value={networks.instagram}
              name='instagram'
              onChange={handleChangeInput}
            />
          </div>
        </div>
      </ContentBox>
    </section>
  );
};

export default SocialLinks;
