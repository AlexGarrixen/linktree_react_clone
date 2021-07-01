import styled from 'styled-components';

type AvatarProps = {
  size?: 'sm' | 'md' | 'lg' | number;
};

const sizes = {
  lg: 48,
  md: 32,
  sm: 24,
};

const setSize = (sizeArg?: AvatarProps['size']) => {
  if (typeof sizeArg === 'string') {
    const size = sizes[sizeArg];
    return `
      width: ${size}px;
      height: ${size}px;
    `;
  }

  return `
      width: ${sizeArg}px;
      height: ${sizeArg}px;
    `;
};

const Avatar = styled.img<AvatarProps>`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  ${({ size = 'md' }) => size && setSize(size)}
`;

export default Avatar;
