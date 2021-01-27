import React, { useCallback } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';
import logo from '~/assets/logoreader.png';

import NotifIcon from '~/assets/HeaderIcons/NotifHeader.png';
import HomeIcon from '~/assets/HeaderIcons/HomeHeader.png';
import UserIcon from '~/assets/HeaderIcons/userHeader.png';

import {
  Container,
  Header,
  HeaderTitle,
  ProfileButton,
  HeaderIcon,
} from './styles';

import Feed from '~/pages/Feed';

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Background>
        <Header>
          <HeaderTitle>
            <Image source={logo} width={64} height={64} />
          </HeaderTitle>
          <HeaderIcon>
            <TouchableOpacity style={{ marginRight: 30 }}>
              <Image source={NotifIcon} width={64} height={64} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 30 }}>
              <Image source={HomeIcon} width={64} height={64} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 30 }}>
              <ProfileButton onPress={navigateToProfile}>
                <Image source={UserIcon} width={64} height={64} />
              </ProfileButton>
            </TouchableOpacity>
          </HeaderIcon>
        </Header>
        <Feed />
      </Background>
    </Container>
  );
};

export default HomeScreen;
