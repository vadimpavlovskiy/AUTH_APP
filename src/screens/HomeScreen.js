import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useNavigationStatus from '../hooks/navigationHook';
import { getPosts } from '../redux/posts.slice';
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
    console.log(posts);
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <View>
            <Text>It's a HomeScreen!</Text>
        </View>
    );
};

export default HomeScreen;
