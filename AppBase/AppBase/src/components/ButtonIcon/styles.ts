import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  margin-left: 12px;

  justify-content: center;
  align-items: center;
  

  border-width: 1px;
  border-radius: 10px;
  border-color: ${({ theme}) => theme.COLORS.ORANGE};
`;

export const IconButton = styled(Icon).attrs(({ theme }) => ({
  // size: 20,
  color: theme.COLORS.ORANGE,
}))``;