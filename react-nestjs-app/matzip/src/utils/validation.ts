type UserInfo = {
  email: string;
  password: string;
};

function validateUser(values: UserInfo) {
  const errors = {
    email: '',
    password: '',
  };
  if (
    !values.email ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = '올바른 이메일 형식을 입력해주세요.';
  }
  if (
    !values.password ||
    values.password.length < 8 ||
    values.password.length > 20
  ) {
    errors.password = '비밀번호는 8자 이상 20자 이하로 입력해주세요.';
  }
  return errors;
}

export default validateUser;

function validateLogin(values: UserInfo) {
  return validateUser(values);
}

function validateSignup(
  values: UserInfo & {
    passwordConfirm: string;
  },
) {
  const errors = validateUser(values);
  const signupErrors = {
    ...errors,
    passwordConfirm: '',
  };

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  }
  return signupErrors;
}

export {validateLogin, validateSignup};
