import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {FeedStackParamList} from '../../types/navigation';

type Navigation = StackNavigationProp<FeedStackParamList>;

function FeedListScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <SafeAreaView>
      <Text>FeedListScreen</Text>
      <Text onPress={() => navigation.navigate('FeedDetail', {id: 1})}>
        피드 디테일로 이동
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default FeedListScreen;
