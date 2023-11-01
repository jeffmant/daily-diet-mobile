import { ArrowLeft } from "phosphor-react-native";
import { View, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";

export type DetailsHeaderStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type DetailsHeaderStyleProps = ViewStyle & {
  type?: DetailsHeaderStyleTypeProps
}
 
export const Container = styled(View)<DetailsHeaderStyleProps>`
  padding: 24px;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenLight : theme.COLORS.redLight};
`

export const Title = styled.Text`
  align-self: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.lg}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const Subtitle = styled.Text`
  align-self: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray2};
  `}
`

export const BackButton = styled.TouchableOpacity``

export const Icon = styled(ArrowLeft)`
  align-self: flex-start;
`