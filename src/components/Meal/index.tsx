import { Container, Title, Divider, StatusIcon, TimeText } from "./styles";

type MealProps = {
  time: string,
  title: string,
  status: boolean
}

export function Meal ({ time, title, status }: MealProps) { 
  return(
    <Container>
      <TimeText>{time}</TimeText>
      <Divider />
      <Title numberOfLines={1}>{title}</Title>
      <StatusIcon type={status ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  )
}