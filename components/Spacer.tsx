import React from 'react';
import { View } from 'react-native';

const Spacer = ({ height = 1 }: { height?: number }) => {
    return (
        <View
            style={{
                width: '100%',
                height: 20 * height,
            }}
        />
    );
};

export default Spacer;
