import styled, { css } from "styled-components/native";

export const ModalContent = styled.View`
  padding: 24px;
  width: 327px;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  align-self: center;
  margin-top: 200px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.gray7};
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xmd}px;
    color: ${theme.COLORS.gray2};
  `}
`

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`