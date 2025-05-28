import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const ThemedTextInput = ({ style, ...props }: TextInputProps) => {
    const color = useThemeColor('textPrimary');
    const backgroundColor = useThemeColor('backgroundSecondary');

    return (
        <TextInput
            style={[{ color, backgroundColor }, styles.input, style]}
            {...props}
        />
    );
};

export default ThemedTextInput;

const styles = StyleSheet.create({
    input: {
        padding: 20,
        borderRadius: 6,
    },
});
