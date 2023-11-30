import { TouchableOpacityProps } from 'react-native';

import { Container, IconButton } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = TouchableOpacityProps &{
  icon: keyof typeof Icon;
  tamanho: Number;
}

export function ButtonIcon({icon, tamanho, ...rest }: Props){
  return (
    <Container{...rest}>
      <IconButton name={icon} size={tamanho}/>
    </Container>
  );
}