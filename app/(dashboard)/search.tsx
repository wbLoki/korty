import {
    GameCard,
    ThemedButton,
    ThemedCalendar,
    ThemedText,
    ThemedView,
} from '@/components';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import { t } from '@/i18n/i18n';
import { GameCardProps } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet } from 'react-native';

export default function Home() {
    const games: GameCardProps[] = [
        { id: '1', title: 'test 1' },
        { id: '2', title: 'test 2' },
        { id: '3', title: 'test 3' },
    ];
    return (
        <ThemedView safe style={styles.container}>
            <ThemedView style={styles.header}>
                <ThemedView style={styles.topHeader}>
                    <ThemedView style={styles.searchInput}>
                        <ThemedView style={styles.searchIcon}>
                            <Ionicons name='search' size={24} color={'white'} />
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
                style={{
                    width: '100%',
                    paddingHorizontal: 8,
                    paddingVertical: 16,
                    flex: 1,
                    minHeight: '100%',
                }}
                contentContainerStyle={{ gap: 12 }}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

