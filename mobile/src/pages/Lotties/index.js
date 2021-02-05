import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import Like from '~/assets/lottie/Like.json';

const Lotties = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Lottie resizeMode="contain" autoSize source={Like} autoPlay loop />
    </SafeAreaView>
  );
};

export default Lotties;
