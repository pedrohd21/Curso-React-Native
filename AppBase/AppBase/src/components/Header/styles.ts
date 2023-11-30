import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
`;

export const BackButton = styled.TouchableOpacity`
  /* flex-direction: column; */
`;

export const BackIcon = styled(Icon).attrs(({ theme }) => ({
  size: 25,
  color: theme.COLORS.ORANGE,
}))`
`;

export const Title = styled.Text`
 ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.ORANGE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: left;
  flex:1;
  padding-left: 10px;
`;