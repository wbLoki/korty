import {
    getAuth,
    GoogleAuthProvider,
    signInWithCredential,
} from '@react-native-firebase/auth';
import {
    deleteDoc,
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
} from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { User } from '../types/User';

const db = getFirestore();

export async function signInWithGoogle(): Promise<User> {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const result = await GoogleSignin.signIn();
    const googleUser = result.data?.user;

    const credential = GoogleAuthProvider.credential(result.data?.idToken);
    const userCredential = await signInWithCredential(getAuth(), credential);

    if (!googleUser) throw new Error('Missing Google user info');

    const userData: User = {
        id: googleUser.id,
        name: googleUser.name,
        email: googleUser.email,
        photo: googleUser.photo,
        givenName: googleUser.givenName,
        familyName: googleUser.familyName,
    };

    const userDocRef = doc(db, 'users', userCredential.user.uid);
    await setDoc(userDocRef, userData, { merge: true });

    return userData;
}

export async function fetchUser(uid: string): Promise<User | null> {
    const userDocRef = doc(db, 'users', uid);
    const snapshot = await getDoc(userDocRef);

    if (!snapshot.exists()) return null;
    return snapshot.data() as User;
}

export async function updateUser(uid: string, updates: Partial<User>) {
    const userDocRef = doc(db, 'users', uid);
    await updateDoc(userDocRef, updates);
}

export async function deleteUser(uid: string) {
    const userDocRef = doc(db, 'users', uid);
    await deleteDoc(userDocRef);
}
