import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import {MainDrawerParamList} from '../types/navigation';

type Navigation = DrawerNavigationProp<MainDrawerParamList>;

function DrawerButton() {
  const navigation = useNavigation<Navigation>();
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Text style={{fontSize: 20}}>서랍</Text>
    </Pressable>
  );
}

export default DrawerButton;
