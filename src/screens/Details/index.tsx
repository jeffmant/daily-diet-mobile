import { ViewProps } from "react-native";
import { Card, CardSubtitle, CardTitle, Container, Content, InfoContainer, Title } from "./styles";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { DetailsHeader } from "../../components/DetailsHeader";
import { getMealStatistcs } from "../../storage/meal/statistcs";
import { useEffect, useState } from "react";

type DetailsProps = ViewProps & {
  route?: RouteProp<ParamListBase>
}

export function Details ({ route, ...rest }: DetailsProps) {
  const { type } = route?.params as { type?: 'PRIMARY' | 'SECONDARY'}

  const [total, setTotal] = useState(0)
  const [percentTotalInside, setPercentTotalInside] = useState(0)
  const [insideDiet, setInsideDiet] = useState(0)
  const [outsideDiet, setOutsideDiet] = useState(0)
  const [bestSequence, setBestSequence] = useState(0)


  async function fetchStatistcs () {
    try {
      const { total, insideDiet, outsideDiet, bestSequence, percentTotalInside } = await getMealStatistcs()
      setTotal(total)
      setPercentTotalInside(percentTotalInside)
      setInsideDiet(insideDiet)
      setOutsideDiet(outsideDiet)
      setBestSequence(bestSequence)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchStatistcs()
  }, [])

  return (
    <Container type={type} { ...rest }>
      <DetailsHeader type={type} value={percentTotalInside} />
      <Content>
        <Title>Estatísticas gerais</Title>
        <Card>
          <CardTitle>{ bestSequence }</CardTitle>
          <CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </CardSubtitle>
        </Card>

        <Card>
          <CardTitle>{ total }</CardTitle>
          <CardSubtitle>
            refeições registradas
          </CardSubtitle>
        </Card>

        <InfoContainer>
          <Card type="PRIMARY">
            <CardTitle>{insideDiet}</CardTitle>
            <CardSubtitle>
              refeições dentro da {'\n'} 
              dieta
            </CardSubtitle>
          </Card>
          <Card type="SECONDARY">
            <CardTitle>{outsideDiet}</CardTitle>
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