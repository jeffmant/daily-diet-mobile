import { Text, TextProps } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.gray7};
`

type TitleStyleProps = TextProps & {
  status: boolean
}

export const Title = styled(Text)<TitleStyleProps>`
  ${({ theme, status }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${status ? theme.COLORS.greenDark : theme.COLORS.redDark};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const BoldSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const Button = styled.TouchableOpacity`
  padding: 16px 24px;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.gray2};
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.xsm}px;
  `}
`