import {colors} from '@/constants/colors';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import CustomMarker from './CustomMarker';

interface MarkerColorInputProps {
  color?: string;
  onChangeColor: (color: string) => void;
}

function MarkerColorInput({color, onChangeColor}: MarkerColorInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.markerLabel}>마커 선택</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.markerInputScroll}>
          {[
            colors.PINK_400,
            colors.BLUE_400,
            colors.YELLOW_400,
            colors.GREEN_400,
            colors.PURPLE_400,
          ].map(selectColor => {
            return (
              <Pressable
                key={selectColor}
                style={[
                  styles.markerBox,
                  color === selectColor && styles.pressedMarker,
                ]}
                onPress={() => onChangeColor(selectColor)}>
                <CustomMarker color={selectColor} />
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    borderRadius: 15,
    padding: 15,
  },
  markerInputScroll: {
    flexDirection: 'row',
    gap: 20,
  },
  markerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    backgroundColor: colors.GRAY_100,
  },
  markerLabel: {
    marginBottom: 15,
    color: colors.GRAY_700,
  },
  pressedMarker: {
    borderWidth: 2,
    borderColor: colors.RED_500,
  },
});

export default MarkerColorInput;
