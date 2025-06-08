import { useThemeColor } from '@/hooks/useThemeColor';
import { getRelativeTime } from '@/lib/timeAgo';
import { MessageProps } from '@/types';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import ThemedText from './ui/ThemedText';

const Message = (props: MessageProps) => {
    const imagebg = useThemeColor('background');
    const backgroundColor = useThemeColor('surface');
    const color = useThemeColor('textSecondary');
    const { id, name, avatar, date, lastMessage, unread } = props;
    const timeAgo = getRelativeTime(new Date(date));

    const router = useRouter();

    return (
        <Pressable onPress={() => router.push(`/messages/${id}`)} style={[styles.container, { backgroundColor }]}>
            <View
                style={{ flexShrink: 0, aspectRatio: 1, paddingVertical: 12 }}
            >
                <Image
                    style={[{ backgroundColor: imagebg }, styles.image]}
                    source={avatar}
                    placeholder={'user image'}
                    contentFit='contain'
                />
            </View>
            <View
                style={{
                    flexShrink: 1,
                    gap: 4,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 8,
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <ThemedText type='defaultSemiBold'>{name}</ThemedText>
                    <ThemedText
                        style={{
                            color,
                            justifyContent: 'flex-end',
                            fontSize: 12,
                        }}
                    >
                        {timeAgo}
                    </ThemedText>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        gap: 16,
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <ThemedText
                        numberOfLines={2}
                        style={{ flexShrink: 1, fontSize: 15, color }}
                    >
                        {lastMessage}
                    </ThemedText>
                    <View>
                        {unread > 0 && (
                            <View style={styles.notification}>
                                <ThemedText>{unread}</ThemedText>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        flexDirection: 'row',
        borderBottomWidth: 1,
        maxWidth: '100%',
        height: 80,
    },
    image: {
        aspectRatio: 1,
        flex: 1,
        height: '100%',
        borderRadius: '100%',
    },
    notification: {
        backgroundColor: 'red',
        width: 24,
        height: 24,
        borderRadius: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
});
