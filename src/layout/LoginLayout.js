import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setError, setUser } from "../redux/user.slice";
import users from "../user_list/user_list";
import ClickButton from "../components/ClickButton";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";

const LoginLayout = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.user.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // checkForEmail func check is typed email is correct and valid
    const checkForEmail = (email) => {
        const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // RegEx form for email

        if (reg.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    //LoginTry func responsible for login functionality
    function LoginTry(email, password) {
        function UserSearch() {
            for (let i = 0; i < users.length; i++) { // for where we going through array and compare with user input
                if (checkForEmail(email)) {
                    if ((users[i].email === email) && (users[i].password === password)) {
                        return users[i];
                    }
                }
                continue;
            }
        }
        if (!UserSearch()) { // if statment for incorrect login/passwrod combination
            if (checkForEmail(email)) {
                setErrorMessage("You're login or password is incorrect. Please, try again")
                dispatch(setError())
            }
            else {
                setErrorMessage("You're email isn't correct. Please, try again");
                dispatch(setError());
            }
        } else {
            dispatch(setUser(UserSearch()))
        }
    }

    return (
        <View style={styles.containter}>
            <View style={styles.form}>
                <Input checkForEmail={checkForEmail} hasError={error} setState={setEmail} placeholder={'Email'} />
                <Input hasError={error} setState={setPassword} placeholder={'Password'} />
                {error ? <ErrorText errortext={errorMessage} /> : null}
                <ClickButton IsDisabled={((email === '') || (password === '')) ? true : false} onPressFunc={() => LoginTry(email, password)} title="Log In" />
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

export default LoginLayout;
