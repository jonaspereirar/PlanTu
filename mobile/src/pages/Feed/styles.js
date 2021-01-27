import styled from 'styled-components';

export const Container = styled.View``;

export const Post = styled.View`
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  background: #ffff;
  border-radius: 15px;
`;

export const Header = styled.View`
  width: auto;
  height: 80px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e5e5e5;
  background: #ffff;
`;

export const Avatar = styled.Image`
  margin-top: 10px;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  margin-left: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
  margin-left: 20px;
`;
export const TabPost = styled.View`
  width: auto;
  height: 80px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e5e5e5;
  background: #ffff;
  margin-top: 15px;
`;

export const TabIcon = styled.View`
  flex: auto;

  flex-direction: row;
  position: relative;
  margin-left: 150px;
`;

export const TabIconSave = styled.View`
  flex: auto;
  flex-direction: row;
`;

export const NumberLike = styled.Text`
  flex: auto;
  flex-direction: row;
  color: #333;
  font-weight: bold;
  margin-left: -15%;
  margin-right: 15%;
`;

export const NumberComment = styled.Text`
  flex: auto;
  flex-direction: row;
  color: #333;
  font-weight: bold;
  margin-left: -15%;
  margin-right: 10%;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`
  margin: 30px 0;
`;
