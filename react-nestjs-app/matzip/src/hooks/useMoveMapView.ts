import {numbers} from '@/constants/numbers';
import {useRef, useState} from 'react';
import MapView, {LatLng, Region} from 'react-native-maps';

type Delta = Pick<Region, 'latitudeDelta' | 'longitudeDelta'>;

function useMoveMapView() {
  const mapRef = useRef<MapView>(null);
  const [regionDelta, setRegionDelta] = useState<Delta>(numbers.INITIAL_DELTA);

  const moveMapView = (coords: LatLng, delta?: Delta) => {
    mapRef.current?.animateToRegion({
      ...coords,
      ...(delta ?? regionDelta),
    });
  };

  const handleChangeDelta = (region: Region) => {
    const {latitudeDelta, longitudeDelta} = region;
    setRegionDelta({latitudeDelta, longitudeDelta});
  };
  return {mapRef, moveMapView, handleChangeDelta};
}

export default useMoveMapView;
