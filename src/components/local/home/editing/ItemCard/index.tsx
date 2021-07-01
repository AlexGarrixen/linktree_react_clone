import React, { useCallback, useState } from 'react';
import Switch from '@components/Form/Switch';
import Button from '@components/Form/Button';
import Trash from '@components/Icon/TrashOutlined';
import Pencil from '@components/Icon/PencilOutlined';
import Text from '@components/DataDisplay/Text';
import {
  ItemCardRoot,
  BodyBox,
  ContentBox,
  ActionsBox,
  InputEditableBox,
  DeleteBox,
} from './styled';

type EditableProps = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
  value?: string;
};

export const Editable = ({
  placeholder,
  value: valueProp,
  onChange,
}: EditableProps) => {
  const [modeEditable, setModeEditable] = useState(false);
  const [value, setValue] = useState(valueProp || '');
  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setValue(ev.target.value);
      onChange && onChange(ev);
    },
    [value]
  );

  return (
    <InputEditableBox>
      {modeEditable ? (
        <input
          placeholder={placeholder}
          autoFocus
          type='text'
          value={value}
          onChange={handleChange}
          onBlur={() => setModeEditable(false)}
        />
      ) : (
        <>
          <button onClick={() => setModeEditable(true)}>placeholder</button>
          <Pencil size='sm' color='gray.400' />
        </>
      )}
    </InputEditableBox>
  );
};

export type ItemCardProps = {
  children?: React.ReactNode;
  centerAxisX?: boolean;
  centerAxisY?: boolean;
  onRequestRemove?: (ev?: React.MouseEvent) => void;
  onEnable?: (isEnabled: boolean) => void;
  isEnabled?: boolean;
};

const ItemCard = ({
  children,
  centerAxisX,
  centerAxisY,
  isEnabled,
  onRequestRemove,
  onEnable,
}: ItemCardProps) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <ItemCardRoot>
      <BodyBox>
        <div />
        <div>
          <ContentBox centerAxisX={centerAxisX} centerAxisY={centerAxisY}>
            {children}
          </ContentBox>
          <ActionsBox>
            <Switch
              colorScheme='success'
              onSwitch={onEnable}
              isEnabled={isEnabled}
            />
            <Trash
              size='2x'
              color='gray.300'
              cursor='pointer'
              onClick={() => setShowDelete(!showDelete)}
            />
          </ActionsBox>
        </div>
      </BodyBox>
      {showDelete && (
        <DeleteBox>
          <Text size='sm' colorScheme='secondary'>
            ¿Eliminar esto para siempre?
          </Text>
          <div>
            <Button onClick={() => setShowDelete(false)}>Cancelar</Button>
            <Button colorScheme='secondary' onClick={onRequestRemove}>
              Eliminar
            </Button>
          </div>
        </DeleteBox>
      )}
    </ItemCardRoot>
  );
};

export default ItemCard;
