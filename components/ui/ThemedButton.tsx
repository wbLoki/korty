import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import { Colors } from '../../constants/Colors';

type ButtonVariant = 'primary' | 'secondary';
type IconName = ComponentProps<typeof Ionicons>['name'];

interface Props {
    text?: string;
    variant?: ButtonVariant;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    fullWidth?: boolean;
    children?: React.ReactNode;
    icon?: IconName;
    iconSize?: number;
    iconColor?: string;
}

const VARIANT_COLOR_MAP: Record<ButtonVariant, keyof typeof Colors.light> = {
    primary: 'buttonPrimary',
    secondary: 'buttonSecondary',
};

const ThemedButton: React.FC<Props> = ({
    text,
    variant = 'primary',
    onPress,
    style,
    textStyle,
    fullWidth,
    children,
    icon,
    iconSize = 24,
    iconColor,
}) => {
    const backgroundColor = useThemeColor(VARIANT_COLOR_MAP[variant]);
    const color = useThemeColor('textPrimary');

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                { backgroundColor, width: fullWidth ? '100%' : 'auto' },
                style,
            ]}
            activeOpacity={0.8}
            accessibilityRole='button'
        >
            {text && (
                <Text style={[styles.text, { color }, textStyle]}>
                    {children || text}
                </Text>
            )}
            {icon && (
                <Ionicons
                    color={iconColor || color}
                    name={icon}
                    size={iconSize}
                />
            )}
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
        flexDirection: 'row',
        gap: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        alignContent: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
    },
});
