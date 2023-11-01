import { ViewProps } from "react-native";
import { 
  Container, 
  StatusIcon, 
  Title, 
  ViewStyleTypeProps 
} from "./styles";


type SelectOptionProps = ViewProps & {
  title: string,
  selected: boolean,
  type: ViewStyleTypeProps
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