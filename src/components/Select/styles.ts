import { View, ViewProps } from "react-native";
import styled, { css } from "styled-components/native";

export type ViewStyleTypeProps = 'PRIMARY' | 'SECONDARY'

type ViewStypeProps = ViewProps & {
  selected: boolean,
  type: ViewStyleTypeProps
}

export const Container = styled(View)<ViewStypeProps>`
  min-width: 160px;
  min-height: 50px;
  padding: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 6px;

  ${({ theme, type, selected }) => css`
    background-color: ${
      type === 'PRIMARY' && selected ? 
      theme.COLORS.greenLight : 
      type === 'SECONDARY' && selected ? 
      theme.COLORS.redLight : 
      theme.COLORS.gray6 
    };
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xsm}px;
    color: ${theme.COLORS.gray1};
  `}
`;

type StatusStyleTypeProps = 'AGREE' | 'DISAGREE'
type ViewStyleProps = ViewProps & {
  type: StatusStyleTypeProps
}

export const StatusIcon = styled(View)<ViewStyleProps>`
  min-width: 8px;
  min-height: 8px;
  border-radius: 99px;

  background-color: ${({ theme, type }) => type === 'AGREE' ? theme.COLORS.greenDark : theme.COLORS.redDark};
`