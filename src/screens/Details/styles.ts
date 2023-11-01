import { View, ViewStyle } from "react-native";
import styled from "styled-components/native";

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