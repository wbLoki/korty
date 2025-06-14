import RNDateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

// export type ThemedDateTimePickerProps = React.ComponentProps<
//     typeof RNDateTimePicker
// > & {
//     themeColor?: string;
// };

type ThemedDateTimePickerProps = {
    style?: object;
    value?: Date;
    mode?: 'date' | 'time' | 'datetime';
};

const ThemedDateTime = ({
    style,
    mode = 'datetime',
    ...props
}: ThemedDateTimePickerProps) => {
    const theme = useColorScheme();

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <RNDateTimePicker
                value={new Date()}
                mode={mode}
                style={[styles.dateTimePicker, style]}
                display='default'
                themeVariant={theme ?? 'light'}
                {...props}
            />
        </View>
    );
};

export default ThemedDateTime;

const styles = StyleSheet.create({
    dateTimePicker: {
        alignSelf: 'stretch',
        flexShrink: 1,
        height: 40,
        paddingHorizontal: 8,
        marginTop: 8,
        maxWidth: '100%',
    },
});
