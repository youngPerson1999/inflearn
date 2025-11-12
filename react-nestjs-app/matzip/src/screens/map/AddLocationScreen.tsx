import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useForm from '@/hooks/useForm';
import useGetAddress from '@/hooks/useGetAddress';
import {MapStackParamList} from '@/types/navigation';
import {getDateWithSeparator} from '@/utils/date';
import {validateAddPost} from '@/utils/validation';
import {StackScreenProps} from '@react-navigation/stack';
import {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

type Props = StackScreenProps<MapStackParamList, 'AddLocation'>;

function AddLocationScreen({route}: Props) {
  const {location} = route.params;
  const address = useGetAddress(location);
  const postForm = useForm({
    initialValues: {title: '', description: '', date: new Date()},
    validate: validateAddPost,
  });
  const [openDate, setOpenDate] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputField value={address} disabled />
      <CustomButton
        variant="outlined"
        label={getDateWithSeparator(postForm.values.date, '. ')}
        onPress={() => setOpenDate(true)}
      />
      <InputField
        placeholder="제목을 입력하세요"
        error={postForm.errors.title}
        touched={postForm.touched.title}
        {...postForm.getTextInputProps('title')}
      />
      <InputField
        multiline
        placeholder="기록할 내용을 입력하세요. (선택)"
        error={postForm.errors.description}
        touched={postForm.touched.description}
        {...postForm.getTextInputProps('description')}
      />
      <DatePicker
        modal
        locale="ko"
        mode="date"
        title={null}
        confirmText="완료"
        cancelText="취소"
        open={openDate}
        date={postForm.values.date}
        onCancel={() => setOpenDate(false)}
        onConfirm={date => {
          postForm.onChange('date', date);
          setOpenDate(false);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
  },
});

export default AddLocationScreen;
