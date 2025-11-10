import useAuth from '@/hooks/useAuth';
import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';

function RootNavigation() {
  const {isLogin} = useAuth();
  return <>{isLogin ? <DrawerNavigation /> : <AuthNavigation />}</>;
}

export default RootNavigation;
