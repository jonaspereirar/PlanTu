import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#E5E5E5', '#ffff'],
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
