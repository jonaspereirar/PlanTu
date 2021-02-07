import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 1}px;
  background: #ffffff;
  border: 4px solid #e5e5e5;
  width: 100%;
  height: 80px;
  margin-top: 120px

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  margin-left: 20px;
  margin-bottom: 20px;
`;
export const HeaderIcon = styled.View`
  flex: auto;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px

  flex-direction: row;
  position: relative;
  margin-left: 150px;
`;

export const UserName = styled.Text`
  color: #28262e;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  padding: 24px;
  width: 80px;
  height: 80px;
  border-radius: 28px;
`;

export const DirectionAvatar = styled.Image`
  padding: 80px 0 ${16 + getBottomSpace()}px;
  margin-top: 54px;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;
