import useGetInfinitePosts from '@/hooks/queries/useGetInfinitePosts';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import FeedItem from './FeedItem';

function FeedList() {
  const {data: posts} = useGetInfinitePosts();
  return (
    <FlatList
      data={posts?.pages.flat()}
      renderItem={({item}) => <FeedItem post={item} />}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    padding: 15,
  },
});

export default FeedList;
