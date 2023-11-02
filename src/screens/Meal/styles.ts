import { View, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";

export type DetailsStyleTypeProps = 'PRIMARY' | 'SECONDARY'

type MealStyleProps = ViewStyle & {
  type?: DetailsStyleTypeProps
}

export const Container = styled(View)<MealStyleProps>`
  height: 100%;
  width: 100%;
  background: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenLight : type === 'SECONDARY' ? theme.COLORS.redLight : theme.COLORS.gray5};
`

export const Content = styled.View`
  padding: 24px;
  height: 85%;
  border-radius: 20px;

  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.gray7};
`

export const InfoSection = styled.View`
  margin: 16px 0px;
  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xmd}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray1};
  `}
`


export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.gray2};
  `}
`

export const Tag = styled.View`
  width: auto;
  padding: 8px 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 99px;

  background-color: ${({ theme }) => theme.COLORS.gray6};
`

export const TagIcon = styled(View)<MealStyleProps>`
  width: 8px;
  height: 8px;

  border-radius: 99px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenDark : theme.COLORS.redDark};
`
export const TagText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const InfoContainer = styled.View``

export const ActionContainer = styled.View`
  gap: 8px;
`