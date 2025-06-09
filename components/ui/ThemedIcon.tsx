import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';

type IconName = ComponentProps<typeof Ionicons>['name'];

const ThemedIcon = ({
    name,
    size = 24,
    color,
}: {
    name: IconName;
    size?: number;
    color?: string;
}) => {
    const iconColor = useThemeColor('textPrimary');
    return <Ionicons name={name} size={size} color={color || iconColor} />;
};

export default ThemedIcon;

const styles = StyleSheet.create({});
