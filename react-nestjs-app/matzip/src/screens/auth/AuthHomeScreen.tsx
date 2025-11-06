import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {AuthStackParamList} from '../../types/navigation';
import {useNavigation} from '@react-navigation/native';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <Text>AuthHomeScreen</Text>
      <Text onPress={() => navigation.navigate('Login')}>로그인</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
