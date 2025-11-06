import {createStackNavigator} from '@react-navigation/stack';
import {createStaticNavigation} from '@react-navigation/native';
import {colors} from '@/constants/colors';
import AuthHomeScreen from '@/screens/auth/AuthHomeScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import SignupScreen from '@/screens/auth/SignupScreen';

const AuthStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: colors.BLACK,
    headerStyle: {
      backgroundColor: colors.WHITE,
      shadowColor: colors.GRAY_500,
    },
  },
  screens: {
    AuthHome: AuthHomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
  },
});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
