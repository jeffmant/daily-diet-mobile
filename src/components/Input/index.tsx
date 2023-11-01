import { Container, InputStyleFilledProps, InputText } from "./styles";

export function Input ({ value, filled , ...rest }: InputStyleFilledProps ) {
  return (
    <Container filled={filled} { ...rest }>
      <InputText>{value}</InputText>
    </Container>
  )
}