import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
const ClickButton = ({ title, onPress }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#EE4E34',
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
