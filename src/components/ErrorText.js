import React from "react";
import { Text, StyleSheet } from "react-native";

const ErrorText = ({ errortext }) => {
    return (
        <Text style={styles.errorText}>{errortext}</Text>
    )
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 10,
        color: 'red',
        paddingHorizontal: 25,
    }
})
export default ErrorText;
