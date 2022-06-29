import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, } from "react-native";
import { useSelector } from "react-redux";
import CommentsModal from "./Modal";


const PostsItem = ({ id, title, body }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const selector = useSelector(state => state.comments);

    function Test() {
        console.log('====================================');
        console.log(selector.error);
        console.log('====================================');
    }
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => { setModalVisible(!modalVisible); }}>
            {modalVisible ? <CommentsModal modalVisible={modalVisible} setModalVisible={setModalVisible} id={id} /> : null}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        backgroundColor: '#FCEDDA',
        marginVertical: 15,
        borderRadius: 7,
    },
    title: {
        width: '90%',
        fontSize: 20,
        padding: 5,
    },
    body: {
        paddingHorizontal: 5,
        fontSize: 14,
    },
})

export default PostsItem;