import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder="이메일" keyboardType="email-address" />
        <InputField placeholder="비밀번호" secureTextEntry />
      </View>
      <CustomButton label="로그인" size="large" variant="filled" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
