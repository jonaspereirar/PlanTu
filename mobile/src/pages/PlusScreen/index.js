import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import flashIcon from '~/assets/PlusIcons/flashIcon.png';
import turnCam from '~/assets/PlusIcons/turnCam.png';
import cameraButton from '~/assets/PlusIcons/cameraButton.png';
import galery from '~/assets/PlusIcons/galery.png';

import terrenoParaPlantar from '~/assets/photos/terrenoParaPlatar.jpg';

const DEFAULT_DELTA = { latitudeDelta: 0.015, longitudeDelta: 0.0121 };

const initialLoc = {
  latitude: null,
  longitude: null,
};

export default function PlusScreen() {
  const sheetRefPhoto = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(initialLoc);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation(coords);
        // alert(JSON.stringify(coords));
        setLoading(false);
      },
      (error) => {
        console.log(error);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 }
    );
  }, []);

  const onMarkPress = (e) => {
    const { coordinate } = e.nativeEvent;
    setLocation(coordinate);
  };

  const onMapPress = (e) => {
    const { coordinate } = e.nativeEvent;
    setLocation(coordinate);
  };

  const headerPhoto = () => (
    <View
      style={{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#ffff',
      }}
    >
      <TouchableOpacity
        style={{
          marginTop: 20,
          height: 70,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <TouchableOpacity
        style={{
          marginLeft: 30,
          marginTop: 10,
          marginBottom: 30,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Image source={flashIcon} style={{ marginRight: 70 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Image source={turnCam} style={{ marginRight: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Image source={cameraButton} style={{ marginRight: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={galery} style={{ marginLeft: 50 }} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  const renderPhoto = () => (
    <View
      style={{
        backgroundColor: '#F7F7F7',
        padding: 16,
        height: 450,
      }}
    >
      <Image source={terrenoParaPlantar} />
    </View>
  );

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

  return (
    <>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={{ flex: 1 }} animating size="large" />
        ) : (
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.mapStayle}
            Region={{
              latitude: location.latitude,
              longitude: location.longitude,
              ...DEFAULT_DELTA,
            }}
            onPress={onMapPress}
            showsUserLocation
            showsMyLocationButton
          >
            <Marker
              draggable
              coordinate={location}
              onDragEnd={onMarkPress}
              title="Terreno Disponível"
              description="Disponibilizo meu terreno para cultivo"
            >
              <Image
                source={require('~/assets/MapIcons/PinoBlue.png')}
                style={{ width: 36, height: 36 }}
                resizeMode="contain"
              />
            </Marker>
          </MapView>
        )}
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: '#ffff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('~/assets/PlusIcons/LoadPlantu.png')}
          style={{ width: 36, height: 36 }}
          resizeMode="contain"
          onPress={() => sheetRefPhoto.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRefPhoto}
        snapPoints={[100, 300, 0]}
        borderRadius={10}
        renderContent={renderPhoto}
        renderHeader={headerPhoto}
      />
    </>
  );
}
