// Line.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => {
    return <View style={styles.line} />;
};

const styles = StyleSheet.create({
    line: {
        backgroundColor: 'red',
        width: '70%',
        height: 1,
        marginVertical: 5,
    },
});

export default Line;
