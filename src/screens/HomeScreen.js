import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { broken_api, correct_api } from '../api/api_constans';
import useNavigationStatus from '../hooks/navigationHook';
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
        dispatch(getBrokenPosts());
        return () => {
            dispatch(deletePosts())
        }
    }, [dispatch]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {posts.error === true ? Snackbar.show({
                text: "First request is always bitten, because requirments.",
                duration: Snackbar.LENGTH_INDEFINITE,
                action: {
                    text: 'Try correct request',
                    onPress: () => { dispatch(getPosts()) }
                },
            }) : null}
            {posts.loading || posts.posts === null || posts.error ? <ActivityIndicator size={"large"} /> : <Text>It's a HomeScreen!</Text>}
        </View>
    );
};

export default HomeScreen;
