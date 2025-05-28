import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { View, ViewProps } from 'react-native';

const ThemedView = ({ style, ...props }: ViewProps) => {
    const color = useThemeColor('background');

    return (
        <View
            style={[
                {
                    backgroundColor: color,
                },
                style,
            ]}
            {...props}
        />
    );
};

export default ThemedView;
