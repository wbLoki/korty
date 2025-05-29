import {
    FirebaseAuthTypes,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
} from '@react-native-firebase/auth';
import {
    doc,
    FirebaseFirestoreTypes,
    getDoc,
    getFirestore,
    setDoc,
} from '@react-native-firebase/firestore';
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
    user: User;
    login: () => Promise<void | string>;
    logout: () => Promise<void>;
    authenticated: boolean;
    initializing: boolean;
};

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
    const [initializing, setInitializing] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    const db = getFirestore();
    const router = useRouter();

    async function handleAuthStateChanged(user: FirebaseAuthTypes.User | null) {
        if (user) {
            try {
                const userDocRef = doc(db, 'users', user.uid);
                const response = await getDoc(userDocRef);

                if (response.exists()) {
                    const userData =
                        response.data() as FirebaseFirestoreTypes.DocumentData;

                    setUser({
                        id: userData?.id ?? '',
                        name: userData?.name ?? '',
                        email: userData?.email ?? '',
                        photo: userData?.photo ?? '',
                        familyName: userData?.familyName ?? '',
                        givenName: userData?.givenName ?? '',
                    });

                    setAuthenticated(true);
                } else {
                    console.warn('User document not found in Firestore.');

                    setUser({
                        id: user.uid,
                        name: '',
                        email: user.email ?? '',
                        photo: '',
                        familyName: '',
                        givenName: '',
                    });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            getAuth(),
            handleAuthStateChanged
        );

        return unsubscribe;
    }, []);

    const login = async () => {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });

            const signInResult = await GoogleSignin.signIn();
            const googleUser = signInResult.data?.user;

            const googleCredential = GoogleAuthProvider.credential(
                signInResult.data?.idToken
            );
            const userCredential = await signInWithCredential(
                getAuth(),
                googleCredential
            );
            if (googleUser) {
                const userDocRef = doc(db, 'users', userCredential.user.uid);

                await setDoc(
                    userDocRef,
                    {
                        id: googleUser.id,
                        name: googleUser.name,
                        email: googleUser.email,
                        photo: googleUser.photo,
                        givenName: googleUser.givenName,
                        familyName: googleUser.familyName,
                    },
                    { merge: true }
                );
                setAuthenticated(true);
                setUser(googleUser);
            }
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
            setUser(EMPTY_USER);
            setAuthenticated(false);
            router.replace('/');
        } catch (error) {
            console.error('Logout Error:', error);
        }
    };

    return (
        <UserContext.Provider
            value={{ user, login, logout, authenticated, initializing }}
        >
            {children}
        </UserContext.Provider>
    );
}
