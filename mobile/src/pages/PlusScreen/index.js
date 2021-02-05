import React, { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import flashIcon from '~/assets/PlusIcons/flashIcon.png';
import turnCam from '~/assets/PlusIcons/turnCam.png';
import cameraButton from '~/assets/PlusIcons/cameraButton.png';
import galery from '~/assets/PlusIcons/galery.png';

import loadPlantu from '~/assets/PlusIcons/LoadPlantu.png';

const DEFAULT_DELTA = { latitudeDelta: 0.015, longitudeDelta: 0.0121 };

const initialLoc = {
  latitude: null,
  longitude: null,
};

export default function PlusScreen() {
  const sheetRefPhoto = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(initialLoc);

  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);

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

  const pickSingle = (cropit, circular = false, mediaType) => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then((image) => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  };

  const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
      cropping,
      width: 300,
      height: 300,
      includeExif: true,
      mediaType,
    })
      .then((image) => {
        console.log('received image', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
        });
        setImages(null);
      })
      .catch((e) => alert(e));
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
        }}
      />
      <View
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
          onPress={() => pickSingleWithCamera(true)}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          <Image source={cameraButton} style={{ marginRight: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => pickSingle(true)}>
          <Image source={galery} style={{ marginLeft: 50 }} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderPhoto = () => (
    <View
      style={{
        backgroundColor: '#F7F7F7',
        padding: 16,
        height: 450,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Image source={image !== null ? image : loadPlantu} />
    </View>
  );

  const renderImage = (image) => {
    return (
      <Image
        style={{ width: 300, height: 300, resizeMode: 'contain' }}
        source={image}
      />
    );
  };

  const renderAsset = (image) => {
    // if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
    //   return this.renderVideo(image);
    // }

    return renderImage(image);
  };

  const style = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    mapStayle: {
      width: Dimensions.get('window').width,
      height: '100%',
    },
    button: {
      backgroundColor: 'blue',
      marginBottom: 10,
    },
    text: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
  });

  return (
    <>
      <View style={style.container}>
        {loading ? (
          <ActivityIndicator style={{ flex: 1 }} animating size="large" />
        ) : (
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={style.mapStayle}
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
              onPress={() => sheetRefPhoto.current.snapTo(0)}
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
      <View style={style.container}>
        <ScrollView>
          {image ? renderAsset(image) : null}
          {images
            ? images.map((i) => <View key={i.uri}>{renderAsset(i)}</View>)
            : null}
        </ScrollView>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <BottomSheet
        ref={sheetRefPhoto}
        snapPoints={[100, 450, 0]}
        renderContent={renderPhoto}
        renderHeader={headerPhoto}
      />
    </>
  );
}
