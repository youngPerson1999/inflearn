import {useState} from 'react';

interface UseFormProps<T> {
  initialValues: T;
}

function useForm<T>({initialValues}: UseFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeValue = (name: keyof T, text: string) => {
    setValues(prev => ({...prev, [name]: text}));
  };
  const handleBlur = (name: keyof T) => {
    setTouched(prev => ({...prev, [name]: true}));
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onChangeText = (text: string) => handleChangeValue(name, text);
    const onBlur = () => handleBlur(name);
    return {
      value,
      onChangeText,
      onBlur,
    };
  };

  return {values, touched, errors, getTextInputProps};
}

export default useForm;
