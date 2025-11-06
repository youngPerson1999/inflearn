import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import {MainDrawerParamList} from '../types/navigation';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors} from '../constants/colors';

type Navigation = DrawerNavigationProp<MainDrawerParamList>;

function DrawerButton({color = colors.BLACK}: {color?: string}) {
  const navigation = useNavigation<Navigation>();
  return (
    <Pressable style={styles.container} onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu" size={25} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

export default DrawerButton;
