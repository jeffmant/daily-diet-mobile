import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native"
import { TouchableOpacity, TouchableOpacityProps, View, ViewProps } from "react-native";

export type PercentStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type PercentStyleProps = TouchableOpacityProps & {
  type: PercentStyleTypeProps
}

export const Container = styled(TouchableOpacity)<PercentStyleProps>`
  width: 100%;
  padding: 20px 16px;
  margin: 32px 0px;

  justify-content: center;
  align-items: center;


  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenLight : theme.COLORS.redLight};
  border-radius: 8px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  gap: 2px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xlg}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray2};
  `}
`

export type IconStyleTypeProps = ''

export const Icon = styled(ArrowUpRight)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px 16px 0px 0px;
`