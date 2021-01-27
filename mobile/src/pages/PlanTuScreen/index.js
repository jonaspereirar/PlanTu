import React, { useRef } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BottomSheet from 'reanimated-bottom-sheet';

import imageHorta from '~/assets/photos/minhaHorta.jpg';
import terreno from '~/assets/photos/terreno.png';
import terrenoParaPlantar from '~/assets/photos/terrenoParaPlatar.jpg';

import Morena from '~/assets/photos/Morena.jpg';
import Jose from '~/assets/photos/Jose.jpg';
import Ruiva from '~/assets/photos/Ruiva.jpg';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapStayle: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
});

const PlanTuScreen = () => {
  const sheetRefLand = useRef(null);
  const sheetRefHorta = useRef(null);
  const sheetRefPlanTu = useRef(null);

  const headerHorta = () => (
    <View
      style={{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#c1e1ff',
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'RobotoSlab-Regular',
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        Horta Biológica da Mariana
      </Text>
      <TouchableOpacity
        style={{ marginLeft: 300, marginBottom: 30, position: 'absolute' }}
      >
        <Image source={Morena} width={64} height={64} borderRadius={32} />
      </TouchableOpacity>
    </View>
  );

  const renderHorta = () => (
    <View
      style={{
        backgroundColor: '#addccc',
        padding: 16,
        height: 450,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'RobotoSlab-Regular',
          marginTop: 20,
          marginBottom: 30,
          marginLeft: 5,
        }}
      >
        Venha conhecer minha horta, Você vai amar meus legumes!!!
      </Text>
      <Image source={imageHorta} />
    </View>
  );

  const headerLand = () => (
    <View
      style={{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#c799ff',
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'RobotoSlab-Regular',
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        Terreno para Cultivo
      </Text>
      <TouchableOpacity
        style={{ marginLeft: 300, marginBottom: 30, position: 'absolute' }}
      >
        <Image source={Jose} width={64} height={64} borderRadius={32} />
      </TouchableOpacity>
    </View>
  );

  const renderLand = () => (
    <View
      style={{
        backgroundColor: '#edcbff',
        padding: 16,
        height: 450,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'RobotoSlab-Regular',
          marginTop: 20,
          marginBottom: 30,
          marginLeft: 5,
        }}
      >
        Disponibilizo meu terreno para cultivo, entre em contato!
      </Text>
      <Image source={terrenoParaPlantar} />
    </View>
  );

  const headerPlanTu = () => (
    <View
      style={{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#66ef87',
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontFamily: 'RobotoSlab-Regular',
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        Minha horta vem ai!!!
      </Text>
      <TouchableOpacity
        style={{ marginLeft: 300, marginBottom: 30, position: 'absolute' }}
      >
        <Image source={Ruiva} width={64} height={64} borderRadius={32} />
      </TouchableOpacity>
    </View>
  );

  const renderPlanTu = () => (
    <View
      style={{
        backgroundColor: '#cbffd0',
        padding: 16,
        height: 450,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'RobotoSlab-Regular',
          marginTop: 20,
          marginBottom: 30,
          marginLeft: 5,
        }}
      >
        Minha Horta em iniciação, estou bastante positiva, terei ótimos legumes
        biológicos
      </Text>
      <Image source={terreno} />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.mapStayle}
          region={{
            latitude: -23.5990597,
            longitude: -46.6348624,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation
          showsMyLocationButton
        >
          <Marker
            coordinate={{
              latitude: -23.5990597,
              longitude: -46.6348624,
            }}
            title="Minha Horta PlanTu"
            description="Horta Biológica de Mariana"
            onPress={() => sheetRefHorta.current.snapTo(0)}
          >
            <Image
              source={require('~/assets/tabIcons/Pino.png')}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: -23.5981465,
              longitude: -46.6319062,
            }}
            title="Terreno Disponivel para PlanTu"
            description="Desejo disponibilizar meu terreno para cultivo"
            onPress={() => sheetRefLand.current.snapTo(0)}
          >
            <Image
              source={require('~/assets/MapIcons/PinoBlue.png')}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />
          </Marker>

          <Marker
            coordinate={{
              latitude: -23.59682,
              longitude: -46.6323904,
            }}
            title="PlanTu em construção"
            description="Iniciado a uma semana"
            onPress={() => sheetRefPlanTu.current.snapTo(0)}
          >
            <Image
              source={require('~/assets/MapIcons/PinoGreen.png')}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />
          </Marker>
        </MapView>
      </View>
      <BottomSheet
        ref={sheetRefHorta}
        snapPoints={[150, 300, 0]}
        renderContent={renderHorta}
        renderHeader={headerHorta}
      />
      <BottomSheet
        ref={sheetRefLand}
        snapPoints={[150, 300, 0]}
        renderContent={renderLand}
        renderHeader={headerLand}
      />
      <BottomSheet
        ref={sheetRefPlanTu}
        snapPoints={[150, 300, 0]}
        renderContent={renderPlanTu}
        renderHeader={headerPlanTu}
      />
    </>
  );
};

export default PlanTuScreen;
