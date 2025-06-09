import {
    GameCard,
    ThemedButton,
    ThemedCalendar,
    ThemedIcon,
    ThemedText,
    ThemedView,
} from '@/components';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import { games } from '@/constants/MockData';
import { t } from '@/i18n/i18n';
import { FlatList, StatusBar, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <ThemedView style={styles.container}>
            <ThemedView safe style={styles.header}>
                <ThemedView style={styles.topHeader}>
                    <ThemedView style={styles.searchInput}>
                        <ThemedView style={styles.searchIcon}>
                            <ThemedIcon name='search' />
                        </ThemedView>
                        <ThemedTextInput
                            placeholder='Rabat'
                            style={{
                                flex: 1,
                                paddingLeft: 50,
                                height: 50,
                                fontSize: 18,
                            }}
                        />
                    </ThemedView>
                    <ThemedButton
                        icon='filter'
                        style={{ backgroundColor: 'transparent' }}
                    />
                    <ThemedButton
                        icon='add-circle-outline'
                        style={{ backgroundColor: 'transparent' }}
                    />
                </ThemedView>
                <ThemedView>
                    <ThemedCalendar />
                </ThemedView>
            </ThemedView>
            <FlatList
                data={games}
                renderItem={({ item }) => <GameCard {...item} />}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => (
                    <ThemedText>{t('search.noGames')}</ThemedText>
                )}
                contentContainerStyle={{ padding: 4 }}
                showsVerticalScrollIndicator={false}
                snapToAlignment='start'
                decelerationRate={'normal'}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
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
        padding: 8,
    },
});
