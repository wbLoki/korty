import { UserProvider } from '@/contexts/UserContext';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];

    return (
        <UserProvider>
            <SafeAreaProvider>
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: theme.navBar },
                    headerTintColor: theme.textPrimary,
                }}
            >
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                <Stack.Screen
                    name='(dashboard)'
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='index' options={{ title: 'Welcome' }} />
            </Stack>
            </SafeAreaProvider>
        </UserProvider>
    );
}
