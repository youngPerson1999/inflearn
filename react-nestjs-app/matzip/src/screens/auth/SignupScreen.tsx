import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function SignupScreen() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
  });

  const handleChangeValue = (name: string, text: string) => {
    setValues(prev => ({...prev, [name]: text}));
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({...prev, [name]: true}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          keyboardType="email-address"
          value={values.email}
          onChangeText={text => handleChangeValue('email', text)}
          onBlur={() => handleBlur('email')}
          touched={touched.email}
        />
        <InputField
          placeholder="비밀번호"
          textContentType="oneTimeCode"
          secureTextEntry
          value={values.password}
          onChangeText={text => handleChangeValue('password', text)}
          onBlur={() => handleBlur('password')}
          touched={touched.password}
        />
        <InputField
          placeholder="비밀번호 확인"
          textContentType="oneTimeCode"
          secureTextEntry
          value={values.passwordConfirm}
          onChangeText={text => handleChangeValue('passwordConfirm', text)}
          onBlur={() => handleBlur('passwordConfirm')}
          touched={touched.passwordConfirm}
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
