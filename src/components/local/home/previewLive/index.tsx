import React from 'react';
import Avatar from '@components/Media/Avatar';
import Title from '@components/DataDisplay/Title';
import Text from '@components/DataDisplay/Text';
import Button from '@components/Form/Button';
import Facebook from '@components/Icon/FacebookOutlined';
import Instagram from '@components/Icon/InstagramOutlined';
import Twitter from '@components/Icon/TwitterOutlined';
import Spacing from '@components/Layout/Spacing';
import { PreviewRoot, ProfileBox, ItemsBox, SocialNetworksBox } from './styled';

const Preview = () => (
  <PreviewRoot srcBg='https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Summer_r4bq2g.svg'>
    <div>
      <ProfileBox>
        <Avatar size={70} />
        <Spacing size={4} />
        <Title size='sm' color='white'>
          @username
        </Title>
        <Text size='sm' color='white'>
          description text
        </Text>
      </ProfileBox>
      <Spacing size={24} />
      <ItemsBox>
        <li>
          <Button colorScheme='white' fullWidth>
            content
          </Button>
        </li>
        <li>
          <Button colorScheme='white' fullWidth>
            content
          </Button>
        </li>
      </ItemsBox>
      <Spacing size={24} />
      <SocialNetworksBox>
        <li>
          <Facebook size={32} />
        </li>
        <li>
          <Instagram size={28} />
        </li>
        <li>
          <Twitter size={28} />
        </li>
      </SocialNetworksBox>
    </div>
  </PreviewRoot>
);

export default Preview;
