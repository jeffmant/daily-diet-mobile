import { TouchableOpacityProps, ViewProps } from "react-native";
import { 
  Container, 
  StatusIcon, 
  Title,
  TouchableStyleTypeProps, 
} from "./styles";


type SelectOptionProps = TouchableOpacityProps & {
  title: string,
  selected: boolean,
  type: TouchableStyleTypeProps
}

export function SelectOption ({ 
  title,
  type, 
  selected, 
  ...rest 
}: SelectOptionProps) {
  return (
    <Container type={type} selected={selected} { ...rest } >
      <StatusIcon type={ type === 'PRIMARY' ? 'AGREE' : 'DISAGREE' } />
      <Title>{title}</Title>
    </Container>
  )
}