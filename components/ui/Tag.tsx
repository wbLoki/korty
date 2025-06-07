import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { View } from 'react-native';
import ThemedText from './ThemedText';

const Tag = ({ text }: { text: string }) => {
    const backgroundColor = useThemeColor('tagBackground');
    const color = useThemeColor('tagText');
    return (
        <View
            style={{
                backgroundColor,
                paddingHorizontal: 12,
                paddingVertical: 2,
                borderRadius: 24,
                width: 'auto',
            }}
        >
            <ThemedText style={{ color }}>{text}</ThemedText>
        </View>
    );
};

export default Tag;

