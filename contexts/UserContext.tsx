import {
    FirebaseAuthTypes,
    getAuth,
    onAuthStateChanged,
} from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

import {
    GoogleSignin,
    isErrorWithCode,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {
    deleteUser as deleteUserFromFirestore,
    fetchUser,
    signInWithGoogle,
    updateUser,
} from '../services/authService';
import { User, UserContextType } from '../types/User';

const EMPTY_USER: User = {
    id: '',
    name: '',
    email: '',
    photo: '',
    familyName: '',
    givenName: '',
};

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(EMPTY_USER);
    const [authenticated, setAuthenticated] = useState(false);
    const [initializing, setInitializing] = useState(true);

    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
        return unsubscribe;
    }, []);

    async function handleAuthStateChanged(
        firebaseUser: FirebaseAuthTypes.User | null
    ) {
        if (firebaseUser) {
            const fetchedUser = await fetchUser(firebaseUser.uid);
            if (fetchedUser) {
                setUser(fetchedUser);
                setAuthenticated(true);
            } else {
                // fallback
                setUser({
                    id: firebaseUser.uid,
                    email: firebaseUser.email ?? '',
                });
            }
        } else {
            setUser(EMPTY_USER);
            setAuthenticated(false);
        }

        if (initializing) setInitializing(false);
    }

    const login = async () => {
        try {
            const signedInUser = await signInWithGoogle();
            setUser(signedInUser);
            setAuthenticated(true);
            router.dismissAll();
            router.replace('/home');
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        throw new Error('Sign In Cancelled');
                    case statusCodes.IN_PROGRESS:
                        throw new Error('Sign In is already in progress');
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        throw new Error(
                            'Play Services Not Available or Outdated'
                        );
                    default:
                        throw new Error('Something went wrong');
                }
            }
            throw new Error('Unknown login error');
        }
    };

    const logout = async () => {
        try {
            await GoogleSignin.signOut();
            await auth.signOut();
            setUser(EMPTY_USER);
            setAuthenticated(false);
            router.replace('/');
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    const updateProfile = async (updates: Partial<User>) => {
        if (!user.id) return;
        await updateUser(user.id, updates);
        setUser((prev) => ({ ...prev, ...updates }));
    };

    const deleteProfile = async () => {
        if (!user.id) return;
        await deleteUserFromFirestore(user.id);
        await logout();
    };

    return (
        <UserContext.Provider
            value={{
                user,
                authenticated,
                initializing,
                login,
                logout,
                updateProfile,
                deleteProfile,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
