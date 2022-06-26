import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setError, setUser } from "../redux/user.slice";
import users from "../user_list/user_list";
import ClickButton from "./ClickButton";
import ErrorText from "./ErrorText";
import Input from "./Input";

const LoginForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.user.error);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function LoginTry(login, password) {
        function UserSearch() {
            for (let i = 0; i < users.length; i++) {
                if ((users[i].login === login) && (users[i].password === password)) {
                    dispatch(setUser(users[i]));
                    return true;
                }
                continue;
            }
        }
        if (!UserSearch()) {
            dispatch(setError())
        }
    }

    return (
        <View style={styles.containter}>
            <View style={styles.form}>
                <Input hasError={error} setState={setLogin} placeholder={'Login'} />
                <Input hasError={error} setState={setPassword} placeholder={'Password'} />
                {error ? <ErrorText errortext={"You're login or password is incorrect. Please, try again"} /> : null}
                <ClickButton IsDisabled={((login === '') || (password === '')) ? true : false} onPressFunc={() => LoginTry(login, password)} title="Log In" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EDDAFC',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        height: '50%',
    },

});

export default LoginForm;
