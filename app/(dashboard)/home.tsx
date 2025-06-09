import { GameCard, ThemedButton, ThemedText, ThemedView } from '@/components';
import { games } from '@/constants/MockData';
import { useThemeColor } from '@/hooks/useThemeColor';
import { t } from '@/i18n/i18n';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';

const HeaderComponent = () => {
    return (
        <ThemedText
            style={{ paddingVertical: 12, fontSize: 24 }}
            type='subtitle'
        >
            {t('home.list.title')}
        </ThemedText>
    );
};

export default function Home() {
    const color = useThemeColor('textSecondary');
    const backgroundColor = useThemeColor('backgroundSecondary');
    const borderColor = useThemeColor('border');
    const router = useRouter();
    return (
        <ThemedView style={styles.container}>
            <ThemedView safe style={[styles.header, { borderColor }]}>
                <ThemedView
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 16,
                    }}
                >
                    <View style={{ gap: 8 }}>
                        <ThemedText type='title'>{t('home.title')}</ThemedText>
                        <ThemedText
                            type='subtitle'
                            style={{ fontWeight: '300', color }}
                        >
                            {t('home.subtitle')}
                        </ThemedText>
                    </View>
                    <ThemedButton
                        style={{
                            backgroundColor: 'transparent',
                            paddingHorizontal: 12,
                        }}
                        icon='person-outline'
                        iconSize={32}
                    />
                </ThemedView>
                <ThemedButton
                    text='Create Game'
                    icon='add-circle-outline'
                    variant='secondary'
                    onPress={() => router.push('/createGame')}
                />
            </ThemedView>
            <ThemedView style={[{ backgroundColor }, styles.content]}>
                <FlatList
                    data={games}
                    renderItem={({ item }) => <GameCard {...item} />}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => (
                        <ThemedText>{t('home.list.noGames')}</ThemedText>
                    )}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={HeaderComponent}
                />
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        gap: 24,
        padding: 20,
        borderBottomWidth: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 4,
    },
});
