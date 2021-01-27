import styled from 'styled-components';
import { Transitioning } from 'react-native-reanimated';

const BackgroundIconColors = {
  Home: '#5BBA9A',
  Adicionar: '#5BBA9A',
  PlanTu: '#5BBA9A',
};

const textColors = {
  Home: '#fff',
  Adicionar: '#fff',
  PlanTu: '#fff',
};

export const Container = styled.TouchableWithoutFeedback``;

export const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin-left: 40px;
  margin-right: 40px;
  height: 50px;
  width: 50px;

  background: ${(props) =>
    props.focused ? BackgroundIconColors[props.label] : 'white'};
`;

export const Icon = styled.Image``;

export const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-size: 10px;
`;
