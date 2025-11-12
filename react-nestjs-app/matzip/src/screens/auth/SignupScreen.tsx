import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useAuth from '@/hooks/queries/useAuth';
import useForm from '@/hooks/useForm';
import {validateSignup} from '@/utils/validation';
import {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

function SignupScreen() {
  const {signupMutation, loginMutation} = useAuth();
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
  const {getTextInputProps, touched, errors, values} = useForm({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, password} = values;
    signupMutation.mutate(
      {email, password},
      {
        onSuccess: () => {
          loginMutation.mutate({email, password});
        },
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          keyboardType="email-address"
          inputMode="email"
          returnKeyType="next"
          autoFocus
          onSubmitEditing={() => passwordRef.current?.focus()}
          touched={touched.email}
          error={errors.email}
          {...getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          textContentType="oneTimeCode"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          touched={touched.password}
          error={errors.password}
          {...getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          textContentType="oneTimeCode"
          secureTextEntry
          onSubmitEditing={handleSubmit}
          touched={touched.passwordConfirm}
          error={errors.passwordConfirm}
          {...getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton
        label="회원가입"
        size="large"
        variant="filled"
        onPress={handleSubmit}
      />
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
