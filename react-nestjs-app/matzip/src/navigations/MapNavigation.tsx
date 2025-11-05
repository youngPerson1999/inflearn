import {createStackNavigator} from '@react-navigation/stack';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import AddLocationScreen from '../screens/map/AddLocationScreen';
import SearchLocationScreen from '../screens/map/SearchLocationScreen';

export const MapStack = createStackNavigator({
  screens: {
    MapHome: {
      screen: MapHomeScreen,
    },
    AddLocation: {
      screen: AddLocationScreen,
    },
  },
  SearchLocation: {
    screen: SearchLocationScreen,
  },
});
