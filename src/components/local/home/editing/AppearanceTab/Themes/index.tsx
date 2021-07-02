import React, { useContext } from 'react';
import Title from '@components/DataDisplay/Title';
import Text from '@components/DataDisplay/Text';
import Spacing from '@components/Layout/Spacing';
import { AppContext } from '@contexts/GlobalApp';
import { ContentBox, ThemesGrid, ThemeMediabox } from './styled';

const Themes = () => {
  const { state, dispatch } = useContext(AppContext);
  const { list: themes, selected: selectedTheme } = state.appearance.themes;

  return (
    <section>
      <Title size={{ xs: 'sm', sm: 'lg', md: 'xl' }}>Temas</Title>
      <Spacing size={30} />
      <ContentBox>
        <ThemesGrid>
          {themes.map((theme) => (
            <li
              key={theme.id}
              onClick={() => dispatch({ type: 'update:theme', payload: theme })}
            >
              <ThemeMediabox
                src={theme.src}
                isActive={
                  theme.name === (selectedTheme?.name || themes[0].name)
                }
              />
              <Text size='sm'>{theme.name}</Text>
            </li>
          ))}
        </ThemesGrid>
      </ContentBox>
    </section>
  );
};

export default Themes;
