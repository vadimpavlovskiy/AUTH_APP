import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CommentItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.comment}>{item.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: '#FCEDDA'
    },
    email: {
        fontSize: 10,
        color: 'red',
        fontWeight: 'bold',
    },
    comment: {
        fontSize: 10,
    },
})


export default CommentItem;