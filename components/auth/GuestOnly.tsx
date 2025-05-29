import { useUser } from '@/hooks/useUser';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import ThemedLoader from '../ThemedLoader';

const GuestOnly = ({ children }: { children: React.ReactNode }) => {
    const { authenticated, initializing } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (authenticated && !initializing) {
            router.replace('/home');
        }
    }, [initializing, authenticated]);

    if (authenticated || initializing) {
        return <ThemedLoader />;
    }
    return children;
};

export default GuestOnly;
