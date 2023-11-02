import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type ButtonStyleProps = {
  type: ButtonStyleTypeProps
}

export type TextStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type TextStyleProps = {
  type: TextStyleTypeProps
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY' ? theme.COLORS.gray2 : theme.COLORS.gray5};
    border: ${ type === 'PRIMARY' ? '' : `1px solid ${theme.COLORS.gray1}`};
  `}
   
  min-width: 115px;
  min-height: 50px;
  padding: 16px 24px;

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const TextButton = styled(Text)<TextStyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.white : theme.COLORS.gray1};
  `}
`

export const Icon = styled.View`
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.COLORS.white}
`