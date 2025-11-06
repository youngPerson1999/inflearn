import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import {AuthStackParamList} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '@/components/CustomButton';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView>
      <CustomButton
        label="이메일 로그인"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
}

export default AuthHomeScreen;
