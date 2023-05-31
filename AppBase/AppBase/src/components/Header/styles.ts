import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const NomeApp = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.BLACK};
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  `;

  export const BackIcon = styled(FontAwesome).attrs(({ theme }) => ({
  name: 'chevron-left',
  size: 32,
  color: theme.COLORS.WHITE
}))``;