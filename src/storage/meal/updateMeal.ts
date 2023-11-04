import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealDTO } from './meal.dto';
import { MEAL_COLLECTION } from '../config';
import { MealType } from '../../components/Meal/meal.type';
import { AppError } from '../../utils/appError.util';

export async function updateMeal (mealId: string, mealDTO: MealDTO) {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

    const parsedMeals = (JSON.parse(storedMeals || '[]') as MealType[]).filter(Boolean) || []

    const foundMeal = parsedMeals.find((meal) => meal.id === mealId)

    if(!foundMeal) {
      throw new AppError('Refeição não encontrada.')
    }

    const filteredMeals = parsedMeals.filter((meal) => meal.id !== mealId)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify([
      ...filteredMeals,
      {
        ...foundMeal,
        ...mealDTO
      }
    ]))
  } catch (error) {
    throw error
  }
}