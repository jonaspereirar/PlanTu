import React, { useCallback } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const { navigate } = useNavigation();

  const navigateToHome = useCallback(() => {
    navigate('Dashboard');
  }, [navigate]);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <TouchableOpacity onPress={navigateToHome}>
          <Image source={require('~/assets/PlantuWelcome.png')} />
          <ActivityIndicator size="large" color="blue" style={{ margin: 10 }} />
        </TouchableOpacity>
      </View>
    </>
  );
}
