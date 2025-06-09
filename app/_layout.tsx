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
                    {/* Auth flow */}
                    <Stack.Screen
                        name='(auth)'
                        options={{ headerShown: false }}
                    />

                    {/* Main dashboard with tabs */}
                    <Stack.Screen
                        name='(dashboard)'
                        options={{ headerShown: false }}
                    />

                    {/* Optional landing screen */}
                    <Stack.Screen name='index' options={{ title: 'Welcome' }} />

                    {/* Hidden screen, accessible but not in tab bar */}
                    <Stack.Screen
                        name='createGame'
                        options={{
                            title: 'Create Game',
                            headerBackTitle: 'Home',
                        }}
                    />
                </Stack>
            </SafeAreaProvider>
        </UserProvider>
    );
}
