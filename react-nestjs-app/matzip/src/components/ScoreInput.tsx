import {colors} from '@/constants/colors';
import Slider from '@react-native-community/slider';
import {StyleSheet, Text, View} from 'react-native';

interface ScoreInputProps {
  score: number;
  onChangeScore: (score: number) => void;
}
function ScoreInput({score, onChangeScore}: ScoreInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelText}>평점</Text>
        <Text style={styles.labelText}>{score}점</Text>
      </View>
      <Slider
        value={score}
        onValueChange={onChangeScore}
        minimumValue={1}
        maximumValue={5}
        step={1}
        maximumTrackTintColor={colors.GRAY_300}
        minimumTrackTintColor={colors.PINK_700}
        thumbTintColor={colors.GRAY_100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    borderRadius: 15,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  labelText: {
    // fontSize: 16,
    // fontWeight: 'bold',
    color: colors.GRAY_700,
  },
});

export default ScoreInput;
