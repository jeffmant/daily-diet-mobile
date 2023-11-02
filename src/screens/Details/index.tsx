import { ViewProps } from "react-native";
import { Card, CardSubtitle, CardTitle, Container, Content, InfoContainer, Title } from "./styles";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { DetailsHeader } from "../../components/DetailsHeader";

type DetailsProps = ViewProps & {
  route?: RouteProp<ParamListBase>
}

export function Details ({ route, ...rest }: DetailsProps) {
  const { type } = route?.params as { type?: 'PRIMARY' | 'SECONDARY'}

  return (
    <Container type={type} { ...rest }>
      <DetailsHeader type={type} />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Card>
          <CardTitle>22</CardTitle>
          <CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </CardSubtitle>
        </Card>

        <Card>
          <CardTitle>109</CardTitle>
          <CardSubtitle>
            refeições registradas
          </CardSubtitle>
        </Card>

        <InfoContainer>
          <Card type="PRIMARY">
            <CardTitle>99</CardTitle>
            <CardSubtitle>
              refeições dentro da {'\n'} 
              dieta
            </CardSubtitle>
          </Card>
          <Card type="SECONDARY">
            <CardTitle>10</CardTitle>
            <CardSubtitle>
              refeições fora da {'\n'}
              dieta
            </CardSubtitle>
          </Card>
        </InfoContainer>
      </Content>
    </Container>
  )
}