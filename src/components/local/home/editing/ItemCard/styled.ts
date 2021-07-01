import styled from 'styled-components';
import { ItemCardProps } from '.';

export const ItemCardRoot = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
`;

export const BodyBox = styled.div`
  display: flex;
  min-height: 120px;

  & > div:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
    width: 40px;
  }

  & > div:last-child {
    flex: 1;
    padding: 12px;
    display: flex;
  }
`;

export const ContentBox = styled.div<
  Pick<ItemCardProps, 'centerAxisX' | 'centerAxisY'>
>`
  flex: 1;
  display: grid;
  gap: 10px;

  ${({ centerAxisY }) =>
    centerAxisY &&
    `
    align-items: center;
    align-content: center;
  `}

  ${({ centerAxisX }) => centerAxisX && 'justify-content: center;'}
`;

export const ActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputEditableBox = styled.div`
  display: flex;
  align-items: center;

  input {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-weight: 600;
    width: 100%;
    max-width: 70%;
    border: none;
  }

  button {
    background-color: transparent;
    margin-right: 3px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export const DeleteBox = styled.div`
  text-align: center;

  > p {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    padding: 7px 4px;
  }

  > div {
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
