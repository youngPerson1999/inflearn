import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {FeedStackParamList} from '@/types/navigation';
import FeedList from '@/components/feed/FeedList';

type Navigation = StackNavigationProp<FeedStackParamList>;

function FeedListScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FeedListScreen;
