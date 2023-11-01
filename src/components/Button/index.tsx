import { ButtonProps } from "react-native";
import { ButtonStyleTypeProps, Container, TextButton } from "./styles";

type CustomButtonProps = ButtonProps & {
  type: ButtonStyleTypeProps,
}

export function Button ({ title, type, ...rest }: CustomButtonProps) {
  return (
    <Container type={type} { ...rest }>
      <TextButton type={type}>{title}</TextButton>
    </Container>
  )
}