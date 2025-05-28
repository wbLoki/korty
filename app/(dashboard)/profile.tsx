import { Spacer, ThemedText, ThemedView } from '@/components';
import { StyleSheet } from 'react-native';

export default function Home() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type='title'>This is Profile</ThemedText>
            <Spacer height={2} />
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
