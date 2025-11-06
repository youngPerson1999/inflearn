import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function LoginScreen() {
  const {getTextInputProps, touched} = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          keyboardType="email-address"
          touched={touched.email}
          {...getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          touched={touched.password}
          {...getTextInputProps('password')}
        />
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
