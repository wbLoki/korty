import { Message, ThemedText, ThemedView } from '@/components';
import { t } from '@/i18n/i18n';
import { MessageProps } from '@/types';
import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const Messages = () => {
    const mockMessages: MessageProps[] = [
        {
            id: '1',
            name: 'Sarah El Amrani',
            message:
                'Bonjour, je voulais prendre rendez-vous pour un nettoyage.',
            date: new Date(Date.now() - 3 * 60 * 1000), // 3 minutes ago
            image: '/avatars/sarah.webp',
            count: 1,
        },
        {
            id: '2',
            name: 'Mohammed Tazi',
            message: 'هل تعملون يوم السبت؟',
            date: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
            image: '/avatars/mohammed.webp',
            count: 2,
        },
        {
            id: '3',
            name: 'Emma Dubois',
            message: 'Je suis intéressée par les facettes dentaires.',
            date: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
            image: '/avatars/emma.webp',
            count: 0,
        },
        {
            id: '4',
            name: 'Omar Bennani',
            message: 'Do you accept walk-ins or is it appointment only?',
            date: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
            image: '/avatars/omar.webp',
            count: 4,
        },
        {
            id: '5',
            name: 'Layla Haddad',
            message: 'Merci pour votre aide lors de ma dernière visite!',
            date: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
            image: '/avatars/layla.webp',
            count: 0,
        },
    ];

    return (
        <ThemedView style={styles.container}>
            <FlatList
                data={mockMessages}
                renderItem={({ item }) => <Message {...item} />}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => (
                    <ThemedText>{t('search.noGames')}</ThemedText>
                )}
                showsVerticalScrollIndicator={false}
                snapToAlignment='start'
                decelerationRate={'normal'}
            />
            <Text>Messages</Text>
        </ThemedView>
    );
};

export default Messages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

