import { useThemeColor } from '@/hooks/useThemeColor';
import { GameCardProps } from '@/types';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tag from './ui/Tag';
import ThemedText from './ui/ThemedText';
import ThemedView from './ui/ThemedView';

const GameCard = ({ title }: GameCardProps) => {
    const backgroundColor = useThemeColor('surface');
    const imagebg = useThemeColor('background');
    const borderColor = useThemeColor('border');
    return (
        <ThemedView
            style={[styles.container, { backgroundColor, borderColor }]}
        >
            <View>
                <ThemedText type='subtitle' style={styles.title}>
                    {title}
                </ThemedText>
            </View>
            <View>
                <ThemedText style={{ fontWeight: '300', fontSize: 12 }}>
                    8:00 AM
                </ThemedText>
            </View>
            <View style={styles.content}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{ flexShrink: 1, aspectRatio: 1 }}>
                        <Image
                            style={[{ backgroundColor: imagebg }, styles.image]}
                            source={''}
                            placeholder={'user image'}
                            contentFit='contain'
                        />
                    </View>
                    <ThemedText style={{ fontWeight: '400', fontSize: 18 }}>
                        7 a side by @Chippo
                    </ThemedText>
                </View>
                <Tag text='14/14' />
            </View>
            <View style={[styles.footer, { borderColor }]}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <Tag text='14/14' />
                    <Tag text='14/14' />
                </View>
                <ThemedText type='subtitle'>$6.85</ThemedText>
            </View>
        </ThemedView>
    );
};

export default GameCard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        gap: 8,
    },
    title: {
        textTransform: 'capitalize',
    },
    content: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 28,
        height: 28,
        borderRadius: '100%',
    },
    footer: {
        borderTopWidth: 1,
        paddingTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

