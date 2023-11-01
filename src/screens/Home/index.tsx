import { Container, Subtitle } from './styles'
import { Header } from '../../components/Header'
import { Percent } from '../../components/Percent'
import { ButtonIcon } from '../../components/ButtonIcon' 

export function Home () {
  return (
    <Container>
      <Header />

      <Percent type='PRIMARY' />

      <Subtitle>Refeições</Subtitle>

      <ButtonIcon title='Nova Refeição' type='PRIMARY' icon='add' />
    </Container>
  )
}