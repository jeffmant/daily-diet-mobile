import { ViewProps } from "react-native";
import { BackButton, Container, Icon, MealsHeaderStyleTypeProps, Subtitle, Title } from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

type MealsHeaderProps = ViewProps & {
  type?: MealsHeaderStyleTypeProps
}

export function MealsHeader ({ type, ...rest }: MealsHeaderProps) {
  const { navigate } = useNavigation()
  const { COLORS } = useTheme()
  return(
    <Container type={type} {...rest}>
      <BackButton onPress={() => navigate('home')}>
        <Icon color={type === 'PRIMARY' ? COLORS.greenDark : COLORS.redDark} />
      </BackButton>
      <Title>Refeição</Title>
    </Container>
  )
}