import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useAuth from '@/hooks/useAuth';
import useForm from '@/hooks/useForm';
import {validateLogin} from '@/utils/validation';
import {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

function LoginScreen() {
  const {loginMutation} = useAuth();
  const passwordRef = useRef<TextInput>(null);
  const {getTextInputProps, touched, errors, values} = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    const {email, password} = values;
    loginMutation.mutate({email, password});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          keyboardType="email-address"
          inputMode="email"
          submitBehavior="submit"
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
          secureTextEntry
          onSubmitEditing={handleSubmit}
          touched={touched.password}
          error={errors.password}
          {...getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="로그인"
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

export default LoginScreen;
