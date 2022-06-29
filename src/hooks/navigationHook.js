
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user.slice";

function useNavigationStatus() {
    const navigate = useNavigation()
    const error = useSelector(state => state.user.error);
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        // Setting for navigation
        user === null ? navigate.setOptions({
            headerRight: () => (
                <></>
            )
        })
            : navigate.setOptions({
                headerRight: () => (
                    <Button title="Log Out" onPress={() => { dispatch(setUser(null)); }} />
                )
            });
    });

    // This hook listen chages to user and make navigation
    useEffect(() => {
        if (user !== null && !error) {
            navigate.navigate('Home');
        } else {
            navigate.navigate('Login')
        }
    }, [error, navigate, user]);
}

export default useNavigationStatus;