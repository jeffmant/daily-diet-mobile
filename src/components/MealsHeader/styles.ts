import { ArrowLeft } from "phosphor-react-native";
import { View, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";

export type MealsHeaderStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type MealsHeaderStyleProps = ViewStyle & {
  type?: MealsHeaderStyleTypeProps
}
 
export const Container = styled(View)<MealsHeaderStyleProps>`
  padding: 24px;
  flex-direction: row;
  align-items: center;
  gap: 100px;
  width: 100%;
  height: 130px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenLight : theme.COLORS.redLight};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const BackButton = styled.TouchableOpacity``

export const Icon = styled(ArrowLeft)``

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray2};
  `}
`