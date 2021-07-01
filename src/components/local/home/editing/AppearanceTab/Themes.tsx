import React from 'react';
import styled from 'styled-components';
import Title from '@components/DataDisplay/Title';
import Text from '@components/DataDisplay/Text';
import Spacing from '@components/Layout/Spacing';

const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  padding: 20px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray[200]};
`;

const ThemesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
  text-align: center;

  li {
    cursor: pointer;
  }
`;

const ThemeMediabox = styled.div<{ src?: string }>`
  padding-top: 150%;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.gray[200]};
  background-size: cover;
  background-position: center;
  margin-bottom: 4px;

  ${({ src }) =>
    src &&
    `
    background-image: url(${src});
  `}
`;

const Themes = () => (
  <section>
    <Title size={{ xs: 'sm', sm: 'lg', md: 'xl' }}>Temas</Title>
    <Spacing size={30} />
    <ContentBox>
      <ThemesGrid>
        <li>
          <ThemeMediabox src='https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Summer_r4bq2g.svg' />
          <Text size='sm'>Nombre tema</Text>
        </li>
        <li>
          <ThemeMediabox src='https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Pink_xnhz7r.svg' />
          <Text size='sm'>Nombre tema</Text>
        </li>
        <li>
          <ThemeMediabox src='https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Ocean_di3ett.svg' />
          <Text size='sm'>Nombre tema</Text>
        </li>
        <li>
          <ThemeMediabox src='https://res.cloudinary.com/dxarbtyux/image/upload/v1625095575/Purple_ug8jf7.svg' />
          <Text size='sm'>Nombre tema</Text>
        </li>
      </ThemesGrid>
    </ContentBox>
  </section>
);

export default Themes;
