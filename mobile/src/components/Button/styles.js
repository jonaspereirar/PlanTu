import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background: #c5ce9a;
  border-radius: 10px;
  margin-top: 8px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #505050;
  font-size: 18px;
`;
