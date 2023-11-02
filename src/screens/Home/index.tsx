import { Container, Subtitle } from './styles'
import { Header } from '../../components/Header'
import { Percent } from '../../components/Percent'
import { ButtonIcon } from '../../components/ButtonIcon' 
import { MealList } from '../../components/MealList'
import { useNavigation } from '@react-navigation/native'
import { MealType } from '../../components/Meal/meal.type'

export function Home () {
  const { navigate } = useNavigation()

  const type = 'PRIMARY'
  const data = new Map<string, MealType[]>() // Map { 'DD.MM.YYY': [ { ... }, ... ] }

  data.set('02.11.2023', [
    { 
      id: Math.floor(Math.random() * 100000).toString(),
      title: 'Alcatra Acebolada',
      description: '3 bifes do miolo de alcatra com sal e cebola',
      date: new Date().toISOString(),
      status: true
    }
  ])
  
  function handleOpenDetails () {
    navigate('details', { type })
  }

  function handleNewMeal () {
    navigate('mealForm', { })
  }

  return (
    <Container>
      <Header />

      <Percent type={type} onPress={handleOpenDetails} />

      <Subtitle>Refeições</Subtitle>

      <ButtonIcon 
        title='Nova Refeição'
        onPress={handleNewMeal} 
        type={"PRIMARY"} 
        icon='add'
      />

      <MealList meals={data} />
    </Container> 
  )
}