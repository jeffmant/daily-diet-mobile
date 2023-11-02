import { View, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";

export type DetailsStyleTypeProps = 'PRIMARY' | 'SECONDARY'

type DetailsStyleProps = ViewStyle & {
  type?: DetailsStyleTypeProps
}

export const Container = styled(View)<DetailsStyleProps>`
  background: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenLight : theme.COLORS.redLight};
`

export const Content = styled.View`
  padding: 24px;
  height: 100%;
  border-radius: 20px;
  background: ${({ theme }) => theme.COLORS.gray7};
`

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 32px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Card = styled(View)<DetailsStyleProps>`
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenLight : type === 'SECONDARY' ? theme.COLORS.redLight : theme.COLORS.gray6};
`

export const CardTitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const CardSubtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray2};
  `}
`