import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PostsItem from "../components/PostsItem";

const PostsLayout = ({ posts }) => {

    const renderItem = ({ item }) => {
        return (
            <PostsItem
                key={item.key}
                title={item.title}
                body={item.body}
                id={item.id}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={posts}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
    }
})

export default PostsLayout;