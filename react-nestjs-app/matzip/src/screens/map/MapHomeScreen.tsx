import {SafeAreaView, StyleSheet, Text} from 'react-native';
import DrawerButton from '@/components/DrawerButton';
import useAuth from '@/hooks/useAuth';
import CustomButton from '@/components/CustomButton';

function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return (
    <SafeAreaView>
      <Text>MapHomeScreen</Text>
      <DrawerButton />
      <CustomButton
        label="로그아웃"
        size="large"
        onPress={() => logoutMutation.mutate(null)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default MapHomeScreen;
