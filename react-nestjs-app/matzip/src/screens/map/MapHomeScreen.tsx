import DrawerButton from '@/components/DrawerButton';
import {colors} from '@/constants/colors';
import {numbers} from '@/constants/numbers';
import usePermission from '@/hooks/usePermission';
import useUserLocation from '@/hooks/useUserLocation';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {useRef} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MapView, {LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const mapRef = useRef<MapView>(null);
  const {userLocation, isUserLocationError} = useUserLocation();

  const moveMapView = (coords: LatLng) => {
    mapRef.current?.animateToRegion({
      ...coords,
      ...numbers.INITIAL_DELTA,
    });
  };

  const handlePressUserLocation = () => {
    if (isUserLocationError) {
      return;
    }
    moveMapView(userLocation!);
  };

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
      <MapView
        ref={mapRef}
        googleMapId="ddf3d475f5bf3ae9b1d61731"
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        region={{
          ...userLocation,
          ...numbers.INITIAL_DELTA,
        }}
      />
      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
          <FontAwesome6
            name="location-crosshairs"
            iconStyle="solid"
            size={25}
            color={colors.WHITE}
          />
        </Pressable>
      </View>
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
  buttonList: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    right: 20,
  },
  mapButton: {
    backgroundColor: colors.PINK_700,
    marginVertical: 5,
    height: 45,
    width: 45,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
  },
});

export default MapHomeScreen;
