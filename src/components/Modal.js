import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions, FlatList, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { broken_api_comments } from "../api/api_constans";
import { deleteComments, getComments, setError } from "../redux/comments.slice";
import CommentItem from "./CommentItem";
const dimension = Dimensions.get('window');
const CommentsModal = ({ visibility, modalVisible, setModalVisible, id }) => {
    const dispatch = useDispatch();

    const comments = useSelector(state => state.comments);
    console.log(comments);
    useEffect(() => {
        // First request will be always broken to show error handling functionality
        dispatch(getComments(id, broken_api_comments))
        return (() => {
            dispatch(deleteComments());
        })
    }, [id, dispatch]);

    return (
        <Modal propagateSwipe={true} animationType="slide" transparent={true} visible={!comments.error} >
            <TouchableOpacity onPressOut={() => { setModalVisible(false); dispatch(deleteComments()) }}>
                <TouchableWithoutFeedback >
                    <View onStartShouldSetResponder={() => true} style={styles.modalContainer}>
                        {comments.comments ? <FlatList showsVerticalScrollIndicator={false} style={{ flex: 1 }} keyExtractor={(item) => item.id} data={comments.comments} renderItem={CommentItem} /> : <ActivityIndicator size='large' />}
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal >
    );
};

export default CommentsModal;

const styles = StyleSheet.create({
    modalContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        width: "50%",
        height: "50%",
        borderRadius: 7,
        marginVertical: '50%',
        marginHorizontal: '25%',
        backgroundColor: 'white',
    }
})