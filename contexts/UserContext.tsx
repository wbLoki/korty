import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
} from '@react-native-firebase/auth';
import {
    GoogleSignin,
    isErrorWithCode,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useRouter } from 'expo-router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

export type User = {
    id?: string;
    name?: string | null;
    email: string | null;
    photo?: string | null;
    familyName?: string | null;
    givenName?: string | null;
};

type UserContextType = {
    user: User | null;
    login: () => Promise<void | string>;
    logout: () => Promise<void>;
    initializing: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [initializing, setInitializing] = useState(true);

    const router = useRouter();

    function handleAuthStateChanged(user: User | null) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            getAuth(),
            handleAuthStateChanged
        );

        return unsubscribe;
    }, [initializing]);

    const login = async () => {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });

            const signInResult = await GoogleSignin.signIn();

            const googleCredential = GoogleAuthProvider.credential(
                signInResult.data?.idToken
            );
            await signInWithCredential(getAuth(), googleCredential);
            setUser(signInResult.data?.user ?? null);
            router.dismissAll();
            router.replace('/home');
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        throw Error('Sign In Cancelled');
                    case statusCodes.IN_PROGRESS:
                        throw Error('Sign In is already in progress');
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        throw Error('Play Services Not Available or Outdated');
                    default:
                        throw Error('Something went wrong');
                }
            }
            throw Error('Unknown error occurred');
        }
    };

    const logout = async () => {
        try {
            await GoogleSignin.signOut();
            await getAuth().signOut();
            setUser(null);
            router.replace('/');
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, initializing }}>
            {children}
        </UserContext.Provider>
    );
}
