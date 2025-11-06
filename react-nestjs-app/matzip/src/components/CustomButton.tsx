import {colors} from '@/constants/colors';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}

function CustomButton({
  label,
  variant = 'filled',
  size = 'medium',
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        styles[variant],
        styles[size],
        pressed && styles.pressed,
      ]}
      {...props}>
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  outlined: {
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.PINK_700,
  },
  filledText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.WHITE,
  },
  outlinedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.PINK_700,
  },
  small: {
    height: 35,
    paddingHorizontal: 10,
  },
  medium: {
    height: 40,
    paddingHorizontal: 16,
  },
  large: {
    width: '100%',
    height: 48,
    paddingHorizontal: 20,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default CustomButton;
