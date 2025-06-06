import { Spacer, ThemedButton, ThemedCalendar, ThemedText, ThemedView } from '@/components';
import ThemedTextInput from '@/components/ThemedTextInput';
import { t } from '@/i18n/i18n';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';


export default function Home() {
    return (
        <ThemedView safe style={styles.container}>
            <ThemedView style={styles.header}>
                <ThemedView style={styles.topHeader}>
                    <ThemedView style={styles.searchInput}>
                        <ThemedView style={styles.searchIcon}>
                            <Ionicons
                                name='search'
                                size={24}
                                color={'white'}
                            />
                        </ThemedView>
                        <ThemedTextInput placeholder='Rabat' style={{ flex: 1, paddingLeft: 50, height: 50, fontSize: 18 }} />
                    </ThemedView>
                    <ThemedButton icon='filter' style={{ backgroundColor: 'transparent' }}/>
                    <ThemedButton icon='add-circle-outline' style={{ backgroundColor: 'transparent' }}/>
                </ThemedView>
                <ThemedView>
                    <ThemedCalendar />
                </ThemedView>
            </ThemedView>
            <Spacer height={2} />
            <ThemedText type='subtitle'>{t('search.subtitle')}</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        gap: 8,
        width: '100%',
    },
    topHeader: {
        paddingHorizontal: 8,
        gap: 2,
        flexDirection: 'row',
        flexGrow: 1,
    },
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        flexGrow: 1,
    },
    searchIcon: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 1,
        padding: 8
    }
});
