import { useThemeColor } from '@/hooks/useThemeColor';
import { getRelativeTime } from '@/lib/timeAgo';
import { MessageProps } from '@/types';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ThemedText from './ui/ThemedText';

const Message = (props: MessageProps) => {
    const imagebg = useThemeColor('background');
    const backgroundColor = useThemeColor('surface');
    const { name, image, date, message, count } = props;
    const timeAgo = getRelativeTime(new Date(date));

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View>
                <Image
                    style={[{ backgroundColor: imagebg }, styles.image]}
                    source={image}
                    placeholder={'user image'}
                    contentFit='contain'
                />
            </View>
            <View>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <ThemedText>{name}</ThemedText>
                    <ThemedText>{timeAgo}</ThemedText>
                </View>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <ThemedText numberOfLines={1} style={{ flexShrink: 1 }}>
                        {message}
                    </ThemedText>
                    <View>
                        <ThemedText>{count}</ThemedText>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: 'row',
        gap: 12,
        borderBottomWidth: 1,
    },
    image: {
        // width: 40,
        aspectRatio: 1,
        flex: 1,
        height: '100%',
        borderRadius: '100%',
        // margin: 16,
    },
});

