import { View, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 14px 12px;
  margin-bottom: 8px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray5};
`

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.sm}px;
    color: ${theme.COLORS.gray1};
  `}
`

export const Divider = styled.Text`
  width: 0px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray4};
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray2};
  `}
`

export type StatusIconStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type StatusIconStyleProps = ViewStyle & {
  type: StatusIconStyleTypeProps
}

export const StatusIcon = styled(View)<StatusIconStyleProps>`
  width: 14px;
  height: 14px;

  border-radius: 99px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.greenMid : theme.COLORS.redMid};
`