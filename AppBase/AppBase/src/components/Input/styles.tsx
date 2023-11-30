import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 35px;
  max-height: 35px;
  padding-left: 10px;
  margin-left: 15px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.ORANGE};
`;