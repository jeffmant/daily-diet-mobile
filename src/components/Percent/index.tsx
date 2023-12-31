import { TouchableOpacityProps } from "react-native";
import { Container, Icon, PercentStyleTypeProps, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components/native";

type PercentProps = TouchableOpacityProps & {
  type: PercentStyleTypeProps,
  value: number
}

export function Percent ({ type, value, onPress, ...rest }: PercentProps) {
  const { COLORS } = useTheme()
  return (
    <Container type={type} onPress={onPress} {...rest}>
        <Title>{ value }%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      <Icon color={type === 'PRIMARY' ? COLORS.greenDark : COLORS.redDark} />
    </Container>
  )
}