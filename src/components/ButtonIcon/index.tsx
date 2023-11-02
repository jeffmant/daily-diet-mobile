import { ButtonProps } from "react-native";
import { ButtonStyleTypeProps, Container, TextButton } from "./styles";
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

type IconType = 'add' | 'edit' | 'delete';

type CustomButtonProps = ButtonProps & {
  type: ButtonStyleTypeProps,
  icon?: IconType,
}

function makeIconProps (type: ButtonStyleTypeProps) {
  return {
    color: type === 'PRIMARY' ? '#fff' : '#1B1D1E',
    size: 18
  }
}

export function ButtonIcon ({ icon, title, type, ...rest }: CustomButtonProps) {
  return (
    <Container type={type} { ...rest }>
        {icon && (
            icon === "add" ? <Plus { ...makeIconProps(type) } /> : 
            icon === "edit" ? <PencilSimpleLine { ...makeIconProps(type) } /> : 
            icon === "delete" ? <Trash { ...makeIconProps(type) } /> : null
        )}
      <TextButton type={type}>{title}</TextButton>
    </Container>
  )
}