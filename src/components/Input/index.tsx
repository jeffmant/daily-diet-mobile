import { TextInputProps } from "react-native";
import { Container, InputText } from "./styles";
import { useState } from "react";

export function Input ({ value, ...rest }: TextInputProps ) {
  const [ filled, setFilled ] = useState(false)
  
  return (
    <Container
      onFocus={() => setFilled(true)}
      onBlur={() => setFilled(false)} 
      filled={filled} 
      { ...rest }
    >
      <InputText>{value}</InputText>
    </Container>
  )
}