import {alerts} from '@/constants/messages';
import {useEffect} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

type PermissionType = 'LOCATION' | 'PHOTO';
const androidPermissions = {
  LOCATION: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  PHOTO: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
};
const iosPermissions = {
  LOCATION: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  PHOTO: PERMISSIONS.IOS.PHOTO_LIBRARY,
};

function usePermission(type: PermissionType) {
  useEffect(() => {
    (async () => {
      const isAndroid = Platform.OS === 'android';
      const permissionOS = isAndroid
        ? androidPermissions[type]
        : iosPermissions[type];
      const checked = await check(permissionOS);

      const showPermissionAlert = () => {
        Alert.alert(
          alerts[`${type}_PERMISSION`].title,
          alerts[`${type}_PERMISSION`].message,
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
  }, [type]);
}

export default usePermission;
