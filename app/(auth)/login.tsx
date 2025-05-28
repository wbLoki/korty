import { Spacer, ThemedButton, ThemedText, ThemedView } from '@/components';
import {
    GoogleSignin,
    GoogleSigninButton,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const showMessage = (message: string) => {
        setMessage(message);
        setTimeout(() => setMessage(''), 5000);
    };

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
                const { idToken, user } = response.data;
                const { name, email, photo } = user;
            }
        } catch (error) {
            if (
                isErrorWithCode(error) &&
                error.code === statusCodes.SIGN_IN_CANCELLED
            ) {
                showMessage('Sign In Cancelled');
            } else if (
                isErrorWithCode(
                    isErrorWithCode(error) &&
                        error.code === statusCodes.IN_PROGRESS
                )
            ) {
                showMessage('Sign In is already in progress');
            } else if (
                isErrorWithCode(
                    isErrorWithCode(error) &&
                        error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
                )
            ) {
                showMessage('Play Services Not Available or Outdated');
            } else {
                showMessage('Something went wrong');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText type='title'>Login</ThemedText>
            <Spacer height={3} />
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color='light'
                onPress={handleGoogleSignIn}
                disabled={loading}
            />
            <ThemedButton variant='primary' text='Login' />
            {/* <KeyboardAvoidingView behavior='padding'>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={user.email}
                    onChangeText={(email) => setUser({ ...user, email })}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={user.password}
                    onChangeText={(password) => setUser({ ...user, password })}
                    secureTextEntry
                />
                <Button title='Sign Up' onPress={signUp} />
                <Button title='Login' onPress={signIn} />
            </KeyboardAvoidingView> */}
        </ThemedView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
