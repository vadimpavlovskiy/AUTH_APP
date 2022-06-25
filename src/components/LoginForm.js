import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import ClickButton from "./ClickButton";
import Input from "./Input";

const LoginForm = () => {
    const navigate = useNavigation();
    return (
        <View style={styles.containter}>
            <View style={styles.form}>
                <Input placeholder={'Login'} />
                <Input placeholder={'Password'} />
                <ClickButton onPress={() => navigate.navigate('Home')} title="Log In" />
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
