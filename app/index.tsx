import { Spacer, ThemedText, ThemedView } from '@/components';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

export default function Index() {
    useEffect(() => {
        GoogleSignin.configure({
            iosClientId:
                '1096567925493-nrsfralu5tdqcg2j480g2hh870i4bjdg.apps.googleusercontent.com',
            webClientId:
                '1096567925493-ofl8psaj4pvbhvg1e4cv8a7sqbehkl22.apps.googleusercontent.com',
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
