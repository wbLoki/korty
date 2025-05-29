import { useUser } from '@/hooks/useUser';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import ThemedLoader from '../ThemedLoader';

const UserOnly = ({ children }: { children: React.ReactNode }) => {
    const { authenticated, initializing } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!authenticated && !initializing) {
            router.replace('/login');
        }
    }, [initializing, authenticated]);

    if (!authenticated || initializing) {
        return <ThemedLoader />;
    }
    return children;
};

export default UserOnly;
