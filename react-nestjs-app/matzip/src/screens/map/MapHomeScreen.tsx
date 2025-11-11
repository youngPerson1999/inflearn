import DrawerButton from '@/components/DrawerButton';
import {colors} from '@/constants/colors';
import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const [userLocation, setUserLocation] = useState<LatLng>();
  const [isUserLocationError, setIsUserLocationError] = useState(false);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setUserLocation({latitude, longitude});
      },
      error => {
        console.error(error);
        setIsUserLocationError(true);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
  return (
    <>
      <DrawerButton
        style={[
          styles.drawerButton,
          {top: inset.top + 10, left: inset.left + 5},
          {},
        ]}
        color={colors.GRAY_500}
      />
      <MapView style={styles.container} provider={PROVIDER_GOOGLE} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButton: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: colors.WHITE,
    borderRadius: 25,
    padding: 5,
    opacity: 0.9,
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
  },
});

export default MapHomeScreen;
