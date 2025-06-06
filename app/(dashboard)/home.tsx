import { Spacer, ThemedText, ThemedView } from '@/components';
import { t } from '@/i18n/i18n';
import { StyleSheet } from 'react-native';

export default function Home() {
    return (
        <ThemedView safe style={styles.container}>
            <ThemedText type='title'>{t('hello')}</ThemedText>
            <Spacer height={2} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
    },
});
