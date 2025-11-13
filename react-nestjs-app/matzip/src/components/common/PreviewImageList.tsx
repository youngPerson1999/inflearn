import {Image, Platform, Pressable, ScrollView, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors} from '@/constants/colors';
import {ImageUri} from '@/types/domain';

interface PreviewImageListProps {
  imageUris: ImageUri[];
  onDelete?: (uri: string) => void;
}

function PreviewImageList({imageUris, onDelete}: PreviewImageListProps) {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {imageUris.map((uri, index) => (
        <Pressable key={index} style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `${
                Platform.OS === 'ios'
                  ? 'http://localhost:3030/'
                  : 'http://10.0.2.2:3030/'
              }/${uri.uri}`,
            }}
            resizeMode="cover"
          />
          <Pressable
            style={styles.deleteButton}
            onPress={() => onDelete?.(uri.uri)}>
            <Ionicons name="close" size={16} color={colors.WHITE} />
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 70,
    height: 70,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginRight: 8,
  },
  container: {
    gap: 15,
    paddingHorizontal: 15,
  },
  deleteButton: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: colors.BLACK,
    borderRadius: 10,
  },
});

export default PreviewImageList;
