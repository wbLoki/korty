import { Message, ThemedText, ThemedView } from '@/components';
import { t } from '@/i18n/i18n';
import { MessageProps } from '@/types';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const Messages = () => {
    const mockMessages: MessageProps[] = [
        {
            id: '1',
            name: 'Sarah El Amrani',
            lastMessage:
                'Bonjour, je voulais prendre rendez-vous pour un nettoyage.',
            date: new Date(Date.now() - 3 * 60 * 1000), // 3 minutes ago
            avatar: '/avatars/sarah.webp',
            unread: 1,
            isGroup: false,
        },
        {
            id: '2',
            name: 'Mohammed Tazi',
            lastMessage: 'هل تعملون يوم السبت؟',
            date: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
            avatar: '/avatars/mohammed.webp',
            unread: 2,
            isGroup: false,
        },
        {
            id: '3',
            name: 'Emma Dubois',
            lastMessage: 'Je suis intéressée par les facettes dentaires.',
            date: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
            avatar: '/avatars/emma.webp',
            unread: 0,
            isGroup: false,
        },
        {
            id: '4',
            name: 'Omar Bennani',
            lastMessage: 'Do you accept walk-ins or is it appointment only?',
            date: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
            avatar: '/avatars/omar.webp',
            unread: 4,
            isGroup: false,
        },
        {
            id: '5',
            name: 'Layla Haddad',
            lastMessage: 'Merci pour votre aide lors de ma dernière visite!',
            date: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
            avatar: '/avatars/layla.webp',
            unread: 0,
            isGroup: false,
        },
    ];

    return (
        <ThemedView style={styles.container}>
            <FlatList
                data={mockMessages}
                renderItem={({ item }) => <Message {...item} />}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => (
                    <ThemedText>{t('chat.noChats')}</ThemedText>
                )}
                showsVerticalScrollIndicator={false}
                snapToAlignment='start'
                decelerationRate={'normal'}
            />
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
