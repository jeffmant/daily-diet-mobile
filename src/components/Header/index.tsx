import { Avatar, Container, Logo } from "./styles";
import logo from '../../assets/logo.png'

export function Header () { 
  return (
    <Container>
      <Logo source={logo} />
      <Avatar source={{ uri: 'https://avatars.githubusercontent.com/jeffmant' }} />
    </Container>
  )
}