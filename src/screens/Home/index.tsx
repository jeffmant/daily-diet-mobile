import { Container, Subtitle } from './styles'
import { Header } from '../../components/Header'
import { Percent } from '../../components/Percent'
import { ButtonIcon } from '../../components/ButtonIcon' 
import { Meal } from '../../components/Meal'

export function Home () {
  return (
    <Container>
      <Header />

      <Percent type='PRIMARY' />

      <Subtitle>Refeições</Subtitle>

      <ButtonIcon title='Nova Refeição' type='PRIMARY' icon='add' />

      <Meal time='20:00' title='Alcatra Acebolada sadhbasdv jdashbjashdbvs' status={true} />
      <Meal time='22:00' title='Balde de Pipoca' status={false} />
      <Meal time='23:00' title='Caixa inteira de bis' status={false} />
    </Container> 
  )
}