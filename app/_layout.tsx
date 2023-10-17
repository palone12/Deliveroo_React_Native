import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import CustomHeader from '@/components/CustomHeader';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};




function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen name="index"  options={{header: () => <CustomHeader/>}} />
      </Stack>
  );
}

export default RootLayoutNav;