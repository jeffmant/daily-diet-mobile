import { ButtonProps } from "react-native";
import { ButtonStyleTypeProps, Container, Icon, TextButton } from "./styles";
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

type IconType = 'add' | 'edit' | 'delete';

type CustomButtonProps = ButtonProps & {
  type: ButtonStyleTypeProps,
  icon?: IconType,
}

const ICON_PROPS = {
  color: '#fff',
  size: 18
}

export function ButtonIcon ({ icon, title, type, ...rest }: CustomButtonProps) {
  return (
    <Container type={type} { ...rest }>
        {icon && (
            icon === "add" ? <Plus { ...ICON_PROPS } /> : 
            icon === "edit" ? <PencilSimpleLine { ...ICON_PROPS } /> : 
            icon === "delete" ? <Trash { ...ICON_PROPS } /> : null
        )}
      <TextButton type={type}>{title}</TextButton>
    </Container>
  )
}