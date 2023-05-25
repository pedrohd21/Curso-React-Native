import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 30px;
`;

// export const Title = styled.Text`
//   color: ${({ theme }) => theme.COLORS.WHITE};
//   font-size: 15px
// `;