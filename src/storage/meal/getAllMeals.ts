import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../config';
import { MealType } from '../../components/Meal/meal.type';
import { formatDate } from '../../utils/date.util';

function mapMeals (meals: MealType[]): Map<string, MealType[]> {
  const mappedMeals = new Map<string, MealType[]>()

  for (const meal of meals) {
    const formatedDate = formatDate(new Date(meal.date))
    const currentMapKey = mappedMeals.get(formatedDate)

    if (currentMapKey) {
      mappedMeals.set(formatedDate, [ ...currentMapKey.values(), meal ])
      continue
    }
    
    mappedMeals.set(formatedDate, [ meal ])
  }

  return mappedMeals
}

export async function getAllMeals (): Promise<Map<string, MealType[]>> {
  try {
    // await AsyncStorage.clear();
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

    const parsedMeals = (JSON.parse(storedMeals || '[]') as MealType[]).filter(Boolean) || []

    const mappedMeals = mapMeals(parsedMeals)

    return mappedMeals
    
  } catch (error) {
    throw error
  }
}