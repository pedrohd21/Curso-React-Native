import { Container, BackButton, NomeApp, Logo, BackIcon} from './styles';
// import logoImg from '../../assets/logo.png';

export function Header(){
  return (
    <Container>
      <BackButton>
        <BackIcon/>
      </BackButton>
      <NomeApp>
        oi
      </NomeApp>
      {/* <Logo source={logoImg}/> */}
    </Container>
  )
}