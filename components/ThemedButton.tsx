import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { Colors } from '../constants/Colors';

type ButtonVariant = 'primary' | 'secondary';

interface Props {
    text?: string;
    variant?: ButtonVariant;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const VARIANT_COLOR_MAP: Record<ButtonVariant, keyof typeof Colors.light> = {
    primary: 'buttonPrimary',
    secondary: 'buttonSecondary',
};

const ThemedButton: React.FC<Props> = ({
    text = '',
    variant = 'primary',
    onPress,
    style,
    textStyle,
}) => {
    const backgroundColor = useThemeColor(VARIANT_COLOR_MAP[variant]);
    const textColor = useThemeColor('background');

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor }, style]}
            activeOpacity={0.8}
            accessibilityRole='button'
        >
            <Text style={[styles.text, { color: textColor }, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default ThemedButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
});
