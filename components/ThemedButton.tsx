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
import { Colors } from '../constants/Colors';

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
    iconColor = 'white',
}) => {
    const backgroundColor = useThemeColor(VARIANT_COLOR_MAP[variant]);
    const textColor = useThemeColor('background');

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
            {text && <Text style={[styles.text, { color: textColor }, textStyle]}>
                {children || text}
            </Text>}
            {icon && <Ionicons color={iconColor} name={icon} size={24} />}
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
