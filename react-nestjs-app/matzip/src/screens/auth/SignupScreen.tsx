import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import {validateSignup} from '@/utils/validation';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function SignupScreen() {
  const {getTextInputProps, touched} = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
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
          textContentType="oneTimeCode"
          secureTextEntry
          {...getTextInputProps('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          textContentType="oneTimeCode"
          secureTextEntry
          touched={touched.passwordConfirm}
          {...getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" size="large" variant="filled" />
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

export default SignupScreen;
