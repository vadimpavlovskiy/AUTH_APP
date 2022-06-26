import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
const ClickButton = ({ title, onPressFunc, IsDisabled }) => {
    return (
        <TouchableOpacity
            disabled={IsDisabled}
            style={IsDisabled ? styles.button_disabled : styles.button_active}
            onPressIn={IsDisabled ? null : () => onPressFunc()}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button_active: {
        alignItems: 'center',
        backgroundColor: '#EE4E34',
        marginHorizontal: '5%',
        marginVertical: '2.5%',
        borderRadius: 15,
        paddingVertical: '2%',
    },
    button_disabled: {
        alignItems: 'center',
        backgroundColor: '#f7ab9e',
        marginHorizontal: '5%',
        marginVertical: '2.5%',
        borderRadius: 15,
        paddingVertical: '2%',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default ClickButton;
