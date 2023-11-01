import { getTime } from "../../utils/date.util";
import { Container, Title, Divider, StatusIcon, TimeText } from "./styles";

type MealProps = {
  date: string,
  title: string,
  status: boolean
}

export function Meal ({ title, status, date }: MealProps) { 
  return(
    <Container>
      <TimeText>{getTime(new Date(date))}</TimeText>
      <Divider />
      <Title numberOfLines={1}>{title}</Title>
      <StatusIcon type={status ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  )
}