import styled from 'styled-components';

export const PreviewRoot = styled.div<{ srcBg?: string }>`
  border: 14px solid ${({ theme }) => theme.colors.gray[500]};
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 300px;
  height: 600px;
  border-radius: 42px;
  text-align: center;
  overflow: hidden;

  ${({ srcBg }) =>
    srcBg &&
    `
    background-image: url(${srcBg});
  `}

  & > div {
    padding: 28px 16px;
    overflow-y: auto;
    max-height: 100%;
  }
`;

export const ProfileBox = styled.div`
  display: grid;
  gap: 4px;
  justify-items: center;
`;

export const ItemsBox = styled.ul`
  display: grid;
  gap: 12px;
`;

export const SocialNetworksBox = styled.ul`
  display: flex;
  justify-content: center;
  gap: 6px;
  color: #fff;
  align-items: center;

  li {
    display: inherit;
    align-items: inherit;
  }
`;
