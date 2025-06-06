import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import ThemedView from './ThemedView';

const ThemedLoader = () => {
    const color = useThemeColor('tabBarActive');
    return (
        <ThemedView style={styles.container}>
            <ActivityIndicator size='large' color={color} />
        </ThemedView>
    );
};

export default ThemedLoader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
