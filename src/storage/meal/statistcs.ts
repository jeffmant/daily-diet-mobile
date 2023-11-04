import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEAL_COLLECTION } from "../config"
import { MealType } from "../../components/Meal/meal.type"

function getBestSequence (meals: MealType[]): number {
  let bestSequence = 0
  let currentSequence = 0 
  
  for (const meal of meals) {
    if (meal.status === true) {
      currentSequence ++;
    } else {
      bestSequence = Math.max(bestSequence, currentSequence)
      currentSequence = 0
    }

    if (currentSequence > bestSequence) bestSequence = currentSequence
  }

  return bestSequence
} 

export async function getMealStatistcs () {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION)

    const parsedMeals = JSON.parse(storedMeals || '[]') as MealType[]
    
    const total = parsedMeals.length;
    const bestSequence = getBestSequence(parsedMeals)
    const insideDiet = parsedMeals.filter((meal) => meal.status === true).length
    const outsideDiet = parsedMeals.filter((meal) => meal.status === false).length
    const percentTotalInside = +((insideDiet * 100) / total).toFixed()

    return {
      total,
      percentTotalInside,
      bestSequence,
      insideDiet,
      outsideDiet
    }
    
  } catch (error) {
    throw error
  }
}