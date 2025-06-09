import { useThemeColor } from '@/hooks/useThemeColor';
import { GameCardProps } from '@/types';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Tag from './ui/Tag';
import ThemedText from './ui/ThemedText';
import ThemedView from './ui/ThemedView';

const GameCard = (props: GameCardProps) => {
    const backgroundColor = useThemeColor('surface');
    const imagebg = useThemeColor('background');
    const borderColor = useThemeColor('border');
    const borderLeftColor = useThemeColor('accent');
    const { title, date, image, desc, tags, price, currentPlayer, maxPlayer } =
        props;
    const time = date.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit',
    });

    return (
        <ThemedView
            style={[
                styles.container,
                { backgroundColor, borderColor, borderLeftColor },
            ]}
        >
            <View>
                <ThemedText type='subtitle' style={styles.title}>
                    {title}
                </ThemedText>
            </View>
            <View
                style={[
                    styles.content,
                    {
                        gap: 8,
                    },
                ]}
            >
                <ThemedText style={{ fontWeight: '300', fontSize: 14 }}>
                    {time}
                </ThemedText>
                <ThemedText style={{ fontWeight: '500', fontSize: 16 }}>
                    Current Players: {currentPlayer}/{maxPlayer}
                </ThemedText>
            </View>
            <View style={styles.content}>
                <View
                    style={[
                        styles.content,
                        {
                            gap: 12,
                        },
                    ]}
                >
                    <View style={{ flexShrink: 1, aspectRatio: 1 }}>
                        <Image
                            style={[{ backgroundColor: imagebg }, styles.image]}
                            source={
                                image ||
                                'https://sp-ao.shortpixel.ai/client/q_lossless,ret_img,w_250/https://miamistonesource.com/wp-content/uploads/2018/05/no-avatar-25359d55aa3c93ab3466622fd2ce712d1.jpg'
                            }
                            placeholder={'user image'}
                            contentFit='cover'
                        />
                    </View>
                    <ThemedText
                        style={{
                            flexShrink: 1,
                        }}
                        numberOfLines={1}
                    >
                        {desc}
                    </ThemedText>
                </View>
            </View>
            <View style={[styles.footer, { borderColor }]}>
                <ScrollView
                    contentContainerStyle={{
                        flexDirection: 'row',
                        gap: 8,
                    }}
                    style={{
                        marginRight: 8,
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                    ))}
                </ScrollView>
                <ThemedText type='subtitle'>${price}</ThemedText>
            </View>
        </ThemedView>
    );
};

export default GameCard;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderLeftWidth: 4,
        gap: 16,
        marginVertical: 8,
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
        paddingTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
