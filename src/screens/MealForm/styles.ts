import styled, { css } from "styled-components/native";

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray2};
  `}
`

export const FormContainer = styled.View``

export const ActionContainer = styled.View``

export const FormSection = styled.View`
  margin: 16px 0px;
  gap: 8px;
`