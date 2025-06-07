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
import { FlatList, StatusBar, StyleSheet } from 'react-native';

export default function Home() {
    const games: GameCardProps[] = [
        {
            id: '1',
            title: 'Settlers of Catan Night',
            date: new Date('2025-06-10T19:00:00'),
            image: null,
            desc: 'Join us for a competitive evening of Settlers of Catan!',
            tags: ['Strategy', 'Board Game', 'Intermediate'],
            price: 5,
            currentPlayer: 3,
            maxPlayer: 4,
        },
        {
            id: '2',
            title: 'Casual Uno + Snacks',
            date: new Date('2025-06-11T17:30:00'),
            image: null,
            desc: 'Relax with a few rounds of Uno and some shared snacks.',
            tags: ['Casual', 'Card Game', 'Snacks'],
            price: 0,
            currentPlayer: 2,
            maxPlayer: 6,
        },
        {
            id: '3',
            title: 'D&D One-Shot Adventure',
            date: new Date('2025-06-14T13:00:00'),
            image: null,
            desc: 'Roleplay and roll the dice in a beginner-friendly D&D session.',
            tags: ['Roleplaying', 'Fantasy', 'D&D'],
            price: 10,
            currentPlayer: 5,
            maxPlayer: 5,
        },
    ];

    return (
        <ThemedView style={styles.container}>
            <ThemedView safe style={styles.header}>
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

