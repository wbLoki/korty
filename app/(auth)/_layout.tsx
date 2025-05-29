import GuestOnly from '@/components/auth/GuestOnly';
import { useUser } from '@/hooks/useUser';
import { Stack } from 'expo-router';

export default function AuthLayout() {
    const { user } = useUser();

    return (
        <GuestOnly>
            <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
        </GuestOnly>
    );
}
