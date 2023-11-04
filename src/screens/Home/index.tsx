import { Container, Subtitle } from './styles'
import { Header } from '../../components/Header'
import { Percent } from '../../components/Percent'
import { ButtonIcon } from '../../components/ButtonIcon' 
import { MealList } from '../../components/MealList'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getAllMeals } from '../../storage/meal/getAllMeals'
import { useCallback, useEffect, useState } from 'react'
import { MealType } from '../../components/Meal/meal.type'
import { AppError } from '../../utils/appError.util'
import { Loading } from '../../components/Loading'
import { Alert } from 'react-native'
import { getMealStatistcs } from '../../storage/meal/statistcs'

export function Home () {
  const { navigate } = useNavigation()

  const [meals, setMeals] = useState<Map<string, MealType[]>>(new Map<string, MealType[]>())
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [percentTotalInside, setPercentTotalInside] = useState(0)

  const type = 'PRIMARY'

  async function fetchMeals () {
    setIsLoading(true)
    try {
      const foundMeals = await getAllMeals()

      setMeals(foundMeals)
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Ops!', error.message)
      } else {
        Alert.alert('Ops!', 'Algo de errado não está certo')
      }
    } finally {
      setIsLoading(false)
    }
  }
  
  async function fetchStatistcs () {
    try {
      const { percentTotalInside } = await getMealStatistcs()
      setPercentTotalInside(percentTotalInside)
    } catch (error) {

    }
  }
  
  function handleOpenDetails () {
    navigate('details', { type })
  }

  function handleNewMeal () {
    navigate('mealForm', { })
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
    fetchStatistcs()
  }, []))

  return (
    <Container>
      <Header />

      <Percent type={type} value={percentTotalInside} onPress={handleOpenDetails} />

      <Subtitle>Refeições</Subtitle>

      <ButtonIcon 
        title='Nova Refeição'
        onPress={handleNewMeal} 
        type={"PRIMARY"} 
        icon='add'
      />

    {isLoading ? (
      <Loading />
    ) : (
      <MealList meals={meals} />
    )}
    </Container> 
  )
}