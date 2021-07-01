import React, { useContext } from 'react';
import Avatar from '@components/Media/Avatar';
import Title from '@components/DataDisplay/Title';
import Text from '@components/DataDisplay/Text';
import Button from '@components/Form/Button';
import Facebook from '@components/Icon/FacebookOutlined';
import Instagram from '@components/Icon/InstagramOutlined';
import Twitter from '@components/Icon/TwitterOutlined';
import Spacing from '@components/Layout/Spacing';
import { AppContext } from '@contexts/GlobalApp';
import { PreviewRoot, ProfileBox, ItemsBox, SocialNetworksBox } from './styled';

const Preview = () => {
  const { state } = useContext(AppContext);
  const { profile } = state.appearance;
  const { social } = state.config;
  const { items } = state;
  const { list: themes, selected: theme } = state.appearance.themes;
  const fallbackTheme = themes[0];

  return (
    <PreviewRoot srcBg={theme ? theme.src : fallbackTheme.src}>
      <div>
        <ProfileBox>
          <Avatar size={70} src={profile.avatar} />
          <Spacing size={4} />
          <Title size='sm' color='white'>
            {profile.username}
          </Title>
          <Text size='sm' color='white'>
            {profile.description}
          </Text>
        </ProfileBox>
        <Spacing size={24} />
        <ItemsBox>
          {items.map(
            ({ props }) =>
              props.enabled && (
                <a href={props.url} target='blank'>
                  <li key={props.title}>
                    <Button colorScheme='white' fullWidth>
                      {props.title}
                    </Button>
                  </li>
                </a>
              )
          )}
        </ItemsBox>
        <Spacing size={24} />
        <SocialNetworksBox>
          {social.facebook && (
            <a href={social.facebook} target='blank'>
              <li>
                <Facebook size={32} color='white' />
              </li>
            </a>
          )}
          {social.instagram && (
            <a href={social.instagram} target='blank'>
              <li>
                <Instagram size={28} color='white' />
              </li>
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} target='blank'>
              <li>
                <Twitter size={28} color='white' />
              </li>
            </a>
          )}
        </SocialNetworksBox>
      </div>
    </PreviewRoot>
  );
};

export default Preview;
