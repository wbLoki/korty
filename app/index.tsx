import { Spacer, ThemedText, ThemedView } from '@/components';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

export default function Index() {
    useEffect(() => {
        GoogleSignin.configure({
            iosClientId:
                '618158284103-q7gvtirgj7dnua9uqdfhcg0mqhsv8kr5.apps.googleusercontent.com',
            webClientId:
                '618158284103-2pp5uapcff5vjrp5f76qrijb0789heot.apps.googleusercontent.com',
            profileImageSize: 150,
        });
    });

    return (
        <ThemedView style={styles.container}>
            <ThemedText type='title'>Welcome to my App</ThemedText>
            <Spacer height={2} />
            <Link href='/login'>
                <ThemedText type='link'>Go to Login Page</ThemedText>
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
