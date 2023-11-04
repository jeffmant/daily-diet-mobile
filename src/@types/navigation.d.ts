import { MealType } from "../components/Meal/meal.type";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      details: {
        type: 'PRIMARY' | 'SECONDARY'
      };
      meal: {
        type: 'PRIMARY' | 'SECONDARY',
        meal: MealType
      };
      mealForm: {
        meal?: MealType
      },
      feedback: {
       status: boolean
      }
    }
  }
}