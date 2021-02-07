import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid #5bba9a;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  color: #0a0151;
  font-family: 'RobotoSlab-Regular';
`;
