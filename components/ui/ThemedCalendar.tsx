import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const ThemedCalendar = () => {
    const backgroundColor = useThemeColor('surface');
    const color = useThemeColor('textPrimary');
    return (
        <CalendarStrip
                scrollable
                rightSelector={[]}
                leftSelector={[]}
                style={{ height: 60, paddingTop: 10, paddingBottom: 10 }}
                calendarColor={backgroundColor}
                calendarHeaderStyle={{ display: 'none' }}
                dateNumberStyle={{ color }}
                dateNameStyle={{ color: 'gray' }}
                highlightDateNumberStyle={{ color: 'white' }}
                highlightDateNameStyle={{ color: 'white' }}
                highlightDateContainerStyle={{ backgroundColor: 'dodgerblue' }}
                selectedDate={new Date()}
                onDateSelected={(date) => console.log(date)}
                />
    );
};

export default ThemedCalendar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
