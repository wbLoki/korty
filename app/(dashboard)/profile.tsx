import { Spacer, ThemedButton, ThemedText, ThemedView } from '@/components';
import { useUser } from '@/hooks/useUser';
import { StyleSheet } from 'react-native';

export default function Home() {
    const { logout, user } = useUser();
    const { email, givenName, photo } = user ?? {};
    return (
        <ThemedView style={styles.container}>
            <ThemedText type='title'>Hello, {givenName}!</ThemedText>
            <Spacer height={2} />
            <ThemedButton
                fullWidth
                text='Logout'
                icon='exit-outline'
                onPress={logout}
            />
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
