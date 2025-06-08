import { useThemeColor } from '@/hooks/useThemeColor';
import { Stack } from 'expo-router';

export default function AuthLayout() {
    const backgroundColor = useThemeColor('background');
    const color = useThemeColor('textPrimary');
    return (
        <Stack
            screenOptions={{
                animation: 'none',
                title: 'Messages',
                headerStyle: { backgroundColor },
                headerTitleStyle: { color },
            }}
        />
    );
}
