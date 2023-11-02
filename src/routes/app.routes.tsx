import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Details } from '../screens/Details'
import { Meal } from '../screens/Meal'
import { MealForm } from '../screens/MealForm'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='details' component={Details} />
      <Screen name='meal' component={Meal} />
      <Screen name='mealForm' component={MealForm} />
    </Navigator>
  )
}