import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

const Input = ({ placeholder, hasError, setState }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'grey'}
            style={hasError ? styles.input_with_error : styles.input}
            // secureTextEntry checks is the placeholder is password
            secureTextEntry={placeholder === 'Password' ? true : false}
            maxLength={12}
            onChangeText={text => setState(text.toLowerCase())}
        />
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
        marginVertical: 10,
        backgroundColor: '#FCEDDA',
    },
    input_with_error: {
        fontSize: 20,
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
        marginHorizontal: 25,
        borderColor: 'red',
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: '#FCEDDA',
    }
})

export default Input;
