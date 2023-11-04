import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '../config';
import { MealType } from '../../components/Meal/meal.type';

export async function deleteMeal (mealId: string) {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

    const parsedMeals = (JSON.parse(storedMeals || '[]') as MealType[]).filter(Boolean) || []

    const filteredMeals = parsedMeals.filter((meal) => meal.id !== mealId)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([...filteredMeals]))
  } catch (error) {
    throw error
  }
}