import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputStyleFilledProps = {
  filled: boolean
}

export const Container = styled(TextInput)<InputStyleFilledProps>`
  align-items: flex-start;
  padding: 14px;

  width: 100%;
  border-radius: 6px;

  border: ${({ theme, filled }) => `1px solid ${filled ? theme.COLORS.gray3 : theme.COLORS.gray5 }`};
`;

export const InputText = styled.Text`
  ${({ theme }) => css`
    font-family: ${ theme.FONT_FAMILY.regular };
    color: ${ theme.COLORS.gray1 };
    font-size: ${theme.FONT_SIZE.md}px;
  `}
`