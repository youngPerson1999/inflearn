import axios from 'axios';
import {useEffect, useState} from 'react';
import Config from 'react-native-config';
import {LatLng} from 'react-native-maps';

function useGetAddress(location: LatLng) {
  const {latitude, longitude} = location;
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address&key=${Config.GOOGLE_MAPS_API_KEY}`,
        );
        const address = data.results.length
          ? data.results[0].formatted_address
          : `위도: ${latitude.toFixed(4)}, 경도: ${longitude.toFixed(4)}`;
        setResult(address);
      } catch (error) {
        console.error('주소 변환 오류:', error);
        setResult('주소를 불러올 수 없습니다.');
      }
    })();
  }, [latitude, longitude]);

  return result;
}

export default useGetAddress;
