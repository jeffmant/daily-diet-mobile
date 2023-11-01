import { FlatList } from "react-native";
import { Container, Title } from "./styles";
import { Meal } from "../Meal";
import { MealType } from "../Meal/meal.type";
import { ListEmpty } from "../ListEmpty";

export function MealList ({ meals }: { meals: Map<string, MealType[]> }) {
  return (
    <FlatList
      data={Array.from(meals.entries())}
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
      ListEmptyComponent={() => (
        <ListEmpty 
          message="Você ainda não cadastrou refeições."
        /> 
      )}
      contentContainerStyle={[
        { paddingBottom: 100 },
        meals.size === 0 && { flex: 1 }
      ]}
    />
  )
}