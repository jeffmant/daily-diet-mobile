import { Container, Subtitle } from './styles'
import { Header } from '../../components/Header'
import { Percent } from '../../components/Percent'
import { ButtonIcon } from '../../components/ButtonIcon' 
import { MealList } from '../../components/MealList'
import { useNavigation } from '@react-navigation/native'

export function Home () {
  const { navigate } = useNavigation()

  const type = 'PRIMARY'
  
  function handleOpenDetails () {
    navigate('details', { type })
  }
  return (
    <Container>
      <Header />

      <Percent type={type} onPress={handleOpenDetails} />

      <Subtitle>Refeições</Subtitle>

      <ButtonIcon title='Nova Refeição' type={type} icon='add' />

      <MealList />
    </Container> 
  )
}