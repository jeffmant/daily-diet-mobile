import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray7 };
  padding: 56px 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${theme.COLORS.gray1};
  `}
`;

export const Subtitle = styled.Text`
  margin: 8px 0px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.gray1};
  `}
`;
