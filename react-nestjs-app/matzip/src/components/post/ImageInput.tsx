import {colors} from '@/constants/colors';
import Ionicons from '@react-native-vector-icons/ionicons';
import {Pressable, StyleSheet, Text} from 'react-native';

interface ImageInputProps {
  onChange: () => void;
}
function ImageInput({onChange}: ImageInputProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.imageInput,
        pressed && styles.imageInputPressed,
      ]}
      onPress={onChange}>
      <Ionicons name="camera-outline" size={30} color={colors.GRAY_500} />
      <Text style={styles.inputText}>사진 추가</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageInput: {
    borderWidth: 1.5,
    borderStyle: 'dotted',
    borderRadius: 15,
    borderColor: colors.GRAY_300,
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,
  },
  inputText: {
    fontSize: 12,
    color: colors.GRAY_500,
  },
  imageInputPressed: {
    opacity: 0.5,
  },
});

export default ImageInput;
