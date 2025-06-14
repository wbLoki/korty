import { ThemedText, ThemedView } from '@/components';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import { useThemeColor } from '@/hooks/useThemeColor';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { StyleSheet } from 'react-native';

const CreateGame = () => {
    const borderColor = useThemeColor('border');
    return (
        <ThemedView style={styles.container}>
            <ThemedView>
                <ThemedText type='subtitle'>Game Title</ThemedText>
                <ThemedTextInput
                    placeholder='e.g. Evening Kickabout'
                    style={[styles.input, { borderColor }]}
                />
            </ThemedView>
            <ThemedView
                style={{
                    flexDirection: 'row',
                    gap: 16,
                    width: '100%',
                }}
            >
                <ThemedView style={{ flex: 1 }}>
                    <ThemedText type='subtitle'>Date</ThemedText>
                    <ThemedTextInput
                        placeholder='e.g. 2023-10-01'
                        style={[styles.input, { borderColor }]}
                    />
                </ThemedView>
                <ThemedView style={{ flex: 1 }}>
                    <ThemedText type='subtitle'>Time</ThemedText>
                    <RNDateTimePicker
                        value={new Date()}
                        mode='time'
                        style={styles.dateTimePicker}
                        design='material'
                    />
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
};

export default CreateGame;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, gap: 20 },
    input: {
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 8,
        marginTop: 8,
    },
    dateTimePicker: {
        flex: 1,
        width: '100%',
        height: 40,
        paddingHorizontal: 8,
        marginTop: 8,
    },
});

