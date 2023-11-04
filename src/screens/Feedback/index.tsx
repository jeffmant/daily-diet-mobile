import { Image } from "react-native";
import { BoldSubtitle, Button, ButtonText, Container, Subtitle, Title } from "./styles";
import womenImage from '../../assets/women.png'
import manImage from '../../assets/man.png'
import { ParamListBase, RouteProp, useNavigation } from "@react-navigation/native";

export function Feedback ({ route }: { route: RouteProp<ParamListBase> }) {
  const { status } = route?.params as { status: boolean }
  
  const { navigate } = useNavigation()

  function handleGoHome () {
    navigate('home')
  }

  return(
    <Container>
      <Title status={status}>
        {
          status ? 'Continue assim!' : 'Que pena!'
        }
        </Title>
        {
          status ? (
            <Subtitle>
              Você continua <BoldSubtitle>dentro da dieta</BoldSubtitle>. Muito bem!
            </Subtitle>
          ) : (
            <Subtitle>
              Você <BoldSubtitle>saiu da dieta</BoldSubtitle> dessa vez, mas continue se esforçando e não desista!
            </Subtitle>
          )
        }
      <Image source={status ? womenImage : manImage} />
      <Button onPress={handleGoHome}>
        <ButtonText>Ir para a página inicial</ButtonText>
      </Button>
    </Container>
  )
}