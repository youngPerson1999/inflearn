import {useEffect} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import {check, request, RESULTS} from 'react-native-permissions';

function usePermission() {
  useEffect(() => {
    (async () => {
      const isAndroid = Platform.OS === 'android';
      const permissionOS = isAndroid
        ? 'android.permission.ACCESS_FINE_LOCATION'
        : 'ios.permission.LOCATION_WHEN_IN_USE';
      const checked = await check(permissionOS);
      console.log('permission check', checked);
      const showPermissionAlert = () => {
        Alert.alert(
          '위치 권한 허용 필요',
          '서비스 이용을 위해 위치 권한이 필요합니다. 설정에서 위치 권한을 허용해주세요.',
          [
            {
              text: '설정하기',
              onPress: () => {
                Linking.openSettings();
              },
            },
            {text: '취소', style: 'cancel'},
          ],
        );
      };
      switch (checked) {
        case RESULTS.DENIED:
          if (isAndroid) {
            showPermissionAlert();
            return;
          }
          await request(permissionOS);
          break;
        case RESULTS.BLOCKED:
        case RESULTS.LIMITED:
          showPermissionAlert();
          break;
      }
    })();
  }, []);
}

export default usePermission;
