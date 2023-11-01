import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xmd}px;
    color: ${theme.COLORS.gray1};
  `}
`