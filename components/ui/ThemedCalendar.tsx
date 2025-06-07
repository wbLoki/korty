import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';

const ThemedCalendar = () => {
    const backgroundColor = useThemeColor('surface');
    const color = useThemeColor('textPrimary');
    const gray = useThemeColor('textSecondary');
    const blue = useThemeColor('primary');
    return (
        <CalendarStrip
            scrollable
            rightSelector={[]}
            leftSelector={[]}
            style={{ height: 60, paddingTop: 10, paddingBottom: 10 }}
            calendarColor={backgroundColor}
            calendarHeaderStyle={{ display: 'none' }}
            dateNumberStyle={{ color }}
            dateNameStyle={{ color: gray }}
            highlightDateNumberStyle={{ color }}
            highlightDateNameStyle={{ color }}
            highlightDateContainerStyle={{ backgroundColor: blue }}
            selectedDate={new Date()}
            onDateSelected={(date) => console.log(date)}
        />
    );
};

export default ThemedCalendar;

