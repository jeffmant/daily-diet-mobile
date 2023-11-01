import { TextInputProps } from "react-native";
import { Container, InputStyleFilledProps, InputText } from "./styles";

type InputProps = TextInputProps & {
  filled: boolean
};

export function Input ({ value, filled , ...rest }: InputProps ) {
  return (
    <Container filled={filled} { ...rest }>
      <InputText>{value}</InputText>
    </Container>
  )
}