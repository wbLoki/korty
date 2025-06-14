import {
    ThemedButton,
    ThemedDateTime,
    ThemedText,
    ThemedView,
} from '@/components';
import ThemedTextInput from '@/components/ui/ThemedTextInput';
import { useThemeColor } from '@/hooks/useThemeColor';
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
                    returnKeyType='done'
                    style={[styles.input, { borderColor }]}
                />
            </ThemedView>
            <ThemedView
                style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}
            >
                <ThemedText type='subtitle'>Time</ThemedText>
                <ThemedDateTime mode='datetime' />
            </ThemedView>
            <ThemedView>
                <ThemedText type='subtitle'>Location</ThemedText>
                <ThemedTextInput
                    placeholder='search for a location'
                    autoCapitalize='words'
                    returnKeyType='next'
                    style={[styles.input, { borderColor }]}
                />
            </ThemedView>
            <ThemedView>
                <ThemedText type='subtitle'>No. of players</ThemedText>
                <ThemedTextInput
                    placeholder='e.g. 10 players'
                    keyboardType='numeric'
                    autoCapitalize='words'
                    returnKeyType='done'
                    style={[styles.input, { borderColor }]}
                />
            </ThemedView>
            <ThemedView
                safe
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingHorizontal: 16,
                }}
            >
                <ThemedButton
                    text='Create Game'
                    variant='primary'
                    onPress={() => {
                        // Handle game creation logic here
                    }}
                />
            </ThemedView>
        </ThemedView>
    );
};

export default CreateGame;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, gap: 20 },
    input: {
        borderWidth: 1,
        padding: 12,
        marginTop: 8,
        fontSize: 16,
    },
    dateTimePicker: {
        flex: 1,
        width: '100%',
        height: 40,
        paddingHorizontal: 8,
        marginTop: 8,
    },
});
