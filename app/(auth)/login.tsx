import { Spacer, ThemedText, ThemedView } from '@/components';
import { useUser } from '@/hooks/useUser';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const { login } = useUser();

    const showMessage = (message: string) => {
        setMessage(message);
        setTimeout(() => setMessage(''), 5000);
    };

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            const response = await login();
            showMessage(response ?? '');
        } catch (error) {
            showMessage(String(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText type='title'>Login</ThemedText>
            <Spacer height={5} />
            <ThemedText type='default'>{message}</ThemedText>
            <Spacer height={2} />
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color='light'
                onPress={handleGoogleSignIn}
                disabled={loading}
            />
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
