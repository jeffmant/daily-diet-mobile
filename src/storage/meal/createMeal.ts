import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealDTO } from './meal.dto';
import { MEAL_COLLECTION } from '../config';
import { MealType } from '../../components/Meal/meal.type';

export async function createMeal (mealDTO: MealDTO) {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

    const parsedMeals = (JSON.parse(storedMeals || '[]') as MealType[]).filter(Boolean) || []

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([
      ...parsedMeals,
      { 
        id: Math.floor(Math.random() * 10000).toString(), 
        ...mealDTO 
      }
    ]))
  } catch (error) {
    throw error
  }
}