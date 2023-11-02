import { Container, Subtitle } from './styles'
import { Header } from '../../components/Header'
import { Percent } from '../../components/Percent'
import { ButtonIcon } from '../../components/ButtonIcon' 
import { MealList } from '../../components/MealList'
import { useNavigation } from '@react-navigation/native'
import { MealType } from '../../components/Meal/meal.type'

export function Home () {
  const { navigate } = useNavigation()

  const type = 'SECONDARY'
  const data = new Map<string, MealType[]>() // Map { 'DD.MM.YYY': [ { ... }, ... ] }
  
  function handleOpenDetails () {
    navigate('details', { type })
  }
  return (
    <Container>
      <Header />

      <Percent type={type} onPress={handleOpenDetails} />

      <Subtitle>Refeições</Subtitle>

      <ButtonIcon title='Nova Refeição' type={"PRIMARY"} icon='add' />

      <MealList meals={data} />
    </Container> 
  )
}