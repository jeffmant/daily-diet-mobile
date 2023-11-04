import styled from "styled-components/native";
import MaskInput from 'react-native-mask-input'

export type InputStyleFilledProps = {
  filled: boolean
}

export const MaskInpuContainer = styled(MaskInput)<InputStyleFilledProps>`
  align-items: flex-start;
  padding: 14px;

  width: 100%;
  border-radius: 6px;

  border: ${({ theme, filled }) => `1px solid ${filled ? theme.COLORS.gray3 : theme.COLORS.gray5 }`};
`