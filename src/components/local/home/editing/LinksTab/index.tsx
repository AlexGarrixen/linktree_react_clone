import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '@components/Form/Button';
import IconButton from '@components/Form/IconButton';
import Thunder from '@components/Icon/ThunderFilled';
import { AppContext } from '@contexts/GlobalApp';
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
  const { state, dispatch } = useContext(AppContext);
  const { items } = state;

  const handleCreateItem = () =>
    dispatch({
      type: 'add:item',
      payload: { type: 'network' },
    });

  const handleChangeEditable =
    (idx: number) => (ev: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = ev.target;
      dispatch({
        type: 'update:item',
        payload: { index: idx, data: { [name]: value } },
      });
    };

  const handleChangeEnabled = (idx: number, isEnabled: boolean) =>
    dispatch({
      type: 'update:item',
      payload: { index: idx, data: { enabled: isEnabled } },
    });

  return (
    <div>
      <ActionsBox>
        <Button colorScheme='primary' onClick={handleCreateItem}>
          Añadir nuevo link
        </Button>
        <IconButton colorScheme='primary' disabled>
          <Thunder size={24} />
        </IconButton>
      </ActionsBox>
      <ItemsGrid>
        {items.map(({ id, props }, idx) => (
          <li key={id}>
            <ItemCard
              centerAxisY
              isEnabled={props.enabled}
              onEnable={(isEnabled) => handleChangeEnabled(idx, isEnabled)}
              onRequestRemove={() =>
                dispatch({ type: 'delete:item', payload: { index: idx } })
              }
            >
              <Editable
                placeholder='Titulo'
                value={props.title}
                onChange={handleChangeEditable(idx)}
                name='title'
              />
              <Editable
                placeholder='url'
                value={props.url}
                onChange={handleChangeEditable(idx)}
                name='url'
              />
            </ItemCard>
          </li>
        ))}
      </ItemsGrid>
    </div>
  );
};

export default LinksTab;
