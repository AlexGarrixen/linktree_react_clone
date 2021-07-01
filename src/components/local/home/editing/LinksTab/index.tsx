import React from 'react';
import styled from 'styled-components';
import Button from '@components/Form/Button';
import IconButton from '@components/Form/IconButton';
import Thunder from '@components/Icon/ThunderFilled';
import ItemCard, { Editable } from '../ItemCard';

const ActionsBox = styled.div`
  display: flex;
  align-items: stretch;
  gap: 12px;
  margin-bottom: 24px;

  button:first-child {
    flex: 1;
  }
`;

const ItemsGrid = styled.ul`
  display: grid;
  grid-gap: 24px;
`;

const LinksTab = () => {
  return (
    <div>
      <ActionsBox>
        <Button colorScheme='primary'>Añadir nuevo link</Button>
        <IconButton colorScheme='primary' disabled>
          <Thunder size={24} />
        </IconButton>
      </ActionsBox>
      <ItemsGrid>
        <li>
          <ItemCard centerAxisY centerAxisX>
            <Editable placeholder='Some placeholder' />
          </ItemCard>
        </li>
        <li>
          <ItemCard centerAxisY>
            <Editable placeholder='Some placeholder' />
            <Editable placeholder='Some placeholder' />
          </ItemCard>
        </li>
      </ItemsGrid>
    </div>
  );
};

export default LinksTab;
