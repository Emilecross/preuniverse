import { Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const Auth = (props) => {
    return (
        <Text style={styles.text}>
            Welcome To Pre Uni New College
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Arial Rounded MT Bold',
        fontSize: 24,
        borderRadius: 20,
        backgroundColor: '#0080ff',
        padding: 10,
    },
});

export default Auth;
