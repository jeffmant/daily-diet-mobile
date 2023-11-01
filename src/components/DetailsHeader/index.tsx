import { ViewProps } from "react-native";
import { BackButton, Container, DetailsHeaderStyleTypeProps, Icon, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

type DetailsHeaderProps = ViewProps & {
  type?: DetailsHeaderStyleTypeProps
}

export function DetailsHeader ({ type, ...rest }: DetailsHeaderProps) {
  const { navigate } = useNavigation()
  const { COLORS } = useTheme()
  return(
    <Container type={type} {...rest}>
      <BackButton onPress={() => navigate('home')}>
        <Icon color={type === 'PRIMARY' ? COLORS.greenDark : COLORS.redDark} />
      </BackButton>
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}