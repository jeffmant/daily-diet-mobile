import { useNavigation } from "@react-navigation/native";
import { getTime } from "../../utils/date.util";
import { Container, Title, Divider, StatusIcon, TimeText } from "./styles";

type MealProps = {
  id: string;
  date: string,
  title: string,
  description: string,
  status: boolean
}

export function Meal ({ id, title, description, status, date }: MealProps) { 
  const { navigate } = useNavigation()
  
  function handleMeal () {
    navigate('meal', { type: status ? 'PRIMARY' : 'SECONDARY', meal: { id, title, description, status, date } })
  }
  
  return(
    <Container onPress={handleMeal}>
      <TimeText>{getTime(new Date(date))}</TimeText>
      <Divider />
      <Title numberOfLines={1}>{title}</Title>
      <StatusIcon type={status ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  )
}