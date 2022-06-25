import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const Input = ({ placeholder }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            // secureTextEntry checks is the placeholder is password
            secureTextEntry={placeholder === 'Password' ? true : false
            }
            style={styles.input} />
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginHorizontal: 25,
        marginVertical: 15,
        backgroundColor: '#FCEDDA',
    },
});

export default Input;
