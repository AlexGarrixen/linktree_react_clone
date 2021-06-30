import React from 'react';
import TypographyBase, {
  TypographyProps,
} from '@components/DataDisplay/TypographyBase';

type TitleProps = {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
} & TypographyProps;

const levels: Record<
  string,
  keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
> = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
};

const Title = ({
  as,
  level,
  colorScheme = 'secondary',
  ...rest
}: TitleProps) => {
  const fallbackAs = levels['1'];

  return (
    <TypographyBase
      as={as || levels[level] || fallbackAs}
      colorScheme={colorScheme}
      {...rest}
    />
  );
};

export default Title;
