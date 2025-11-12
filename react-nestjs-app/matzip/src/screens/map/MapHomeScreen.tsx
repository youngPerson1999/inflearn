import CustomMarker from '@/components/CustomMarker';
import DrawerButton from '@/components/DrawerButton';
import MapIconButton from '@/components/MapIconButton';
import {colors} from '@/constants/colors';
import {numbers} from '@/constants/numbers';
import useMoveMapView from '@/hooks/useMoveMapView';
import usePermission from '@/hooks/usePermission';
import useUserLocation from '@/hooks/useUserLocation';
import {MapStackParamList} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import MapView, {LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

type Navigation = StackNavigationProp<MapStackParamList>;

function MapHomeScreen() {
  const navigation = useNavigation<Navigation>();
  const inset = useSafeAreaInsets();
  const {userLocation, isUserLocationError} = useUserLocation();
  const [selectedLocation, setSelectedLocation] = useState<LatLng | null>(null);
  const {mapRef, moveMapView, handleChangeDelta} = useMoveMapView();
  usePermission('LOCATION');

  const handlePressUserLocation = () => {
    if (isUserLocationError) {
      Toast.show({
        type: 'error',
        text1: '위치 정보를 가져올 수 없습니다.',
        position: 'bottom',
      });
      return;
    }
    moveMapView(userLocation!);
  };

  const handlePressMarker = (coordinate: LatLng) => {
    moveMapView(coordinate);
  };

  const handlePressAddPost = () => {
    if (!selectedLocation) {
      Alert.alert(
        '추가할 위치를 선택해주세요',
        '지도를 길게 누르면 위치가 표시됩니다.',
      );
      return;
    }
    navigation.navigate('AddLocation', {
      location: selectedLocation,
    });
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
        onLongPress={({nativeEvent}) =>
          setSelectedLocation(nativeEvent.coordinate)
        }
        onRegionChangeComplete={handleChangeDelta}>
        {selectedLocation && (
          <CustomMarker
            color={colors.PINK_400}
            coordinate={selectedLocation}
            score={3}
            onPress={() => handlePressMarker(selectedLocation)}
          />
        )}
      </MapView>
      <View style={styles.buttonList}>
        <MapIconButton name="plus" onPress={handlePressAddPost} />
        <MapIconButton
          name="location-crosshairs"
          onPress={handlePressUserLocation}
        />
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
});

export default MapHomeScreen;
