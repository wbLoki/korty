import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ThemedViewProps = ViewProps & {
    safe?: boolean;
};

const ThemedView = ({ style, safe = false, ...props }: ThemedViewProps) => {
    const color = useThemeColor('background');
    const insets = useSafeAreaInsets();

    if (!safe)
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

    return (
        <View
            style={[
                {
                    backgroundColor: color,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                },
                style,
            ]}
            {...props}
        />
    );
};

export default ThemedView;
