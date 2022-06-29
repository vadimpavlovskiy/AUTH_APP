import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { broken_api_posts } from '../api/api_constans';
import useNavigationStatus from '../hooks/navigationHook';
import PostsLayout from '../layout/PostsLayout';
import { deletePosts, getBrokenPosts, getPosts } from '../redux/posts.slice';
import { setUser } from '../redux/user.slice';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts)
    useNavigationStatus();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="Log Out" onPress={() => { dispatch(setUser(null)); }} />
            ),
        });
    });
    useEffect(() => {
        setTimeout(() => dispatch(getPosts(broken_api_posts)), 3000)
        return () => {
            dispatch(deletePosts())
        }
    }, [dispatch]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDDAFC' }}>
            {posts.loading || posts.posts === null || posts.error ? <ActivityIndicator size={"large"} /> : <PostsLayout posts={posts.posts} />}
        </View>
    );
};

export default HomeScreen;
