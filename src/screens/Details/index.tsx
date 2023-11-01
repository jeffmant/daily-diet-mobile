import { Button, Text, ViewProps } from "react-native";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { ParamListBase, Route, RouteProp, useNavigation } from "@react-navigation/native";
import { DetailsHeader } from "../../components/DetailsHeader";
import { DetailsHeaderStyleTypeProps } from "../../components/DetailsHeader/styles";

type DetailsProps = ViewProps & {
  route?: RouteProp<ParamListBase>
}

export function Details ({ route, ...rest }: DetailsProps) {
  const { type } = route?.params as { type?: 'PRIMARY' | 'SECONDARY'}

  return (
    <Container type={type}>
      <DetailsHeader type={type} />
      <Content>
        <Text>Details Header</Text>
      </Content>
    </Container>
  )
}