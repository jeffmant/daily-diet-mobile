import { ViewProps } from "react-native";
import { Container, Icon, PercentStyleTypeProps, Subtitle, TextContainer, Title } from "./styles";
import { useTheme } from "styled-components/native";

type PercentProps = ViewProps & {
  type: PercentStyleTypeProps
}

export function Percent ({ type, ...rest }: PercentProps) {
  const { COLORS } = useTheme()
  return (
    <Container type={type} {...rest}>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      <Icon color={type === 'PRIMARY' ? COLORS.greenDark : COLORS.redDark} />
    </Container>
  )
}