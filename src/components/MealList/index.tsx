import { FlatList } from "react-native";
import { Container, Title } from "./styles";
import { Meal } from "../Meal";
import { formatDate } from "../../utils/date.util";
import { MealType } from "../Meal/meal.type";

const makeRandomId = () => Math.floor(Math.random() * 10000).toString()

const dailiesMap = new Map<string, MealType[]>()

dailiesMap.set(formatDate(new Date()), [
  { id: makeRandomId(), title: 'Alcatra Acebolada', date: new Date().toISOString(), status: true },
  { id: makeRandomId(), title: 'Balde de Pipoca', date: new Date().toISOString(), status: false },
  { id: makeRandomId(), title: 'Caixa de Bis', date: new Date().toISOString(), status: false }
])

dailiesMap.set(formatDate(new Date('2023-10-31')), [
  { id: makeRandomId(), title: 'Filé de Frango', date: new Date('2023-10-31').toISOString(), status: true },
  { id: makeRandomId(), title: 'Balde de Pipoca', date: new Date('2023-10-31').toISOString(), status: false },
  { id: makeRandomId(), title: 'Caixa de Bis', date: new Date('2023-10-31').toISOString(), status: false }
])

export function MealList () {
  return (
    <FlatList
      data={Array.from(dailiesMap.entries())}
      renderItem={({ item, index }) => (
        <Container key={index}>
          <Title>{item[0]}</Title>
          {
            item[1].map(meal => (
              <Meal key={meal.id} title={meal.title} date={meal.date} status={meal.status} />
            ))
          }  
        </Container>
      )}
      showsVerticalScrollIndicator={false}
    />
  )
}