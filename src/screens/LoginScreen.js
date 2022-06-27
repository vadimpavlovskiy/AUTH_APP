import React from 'react';
import { View, Text } from 'react-native';
import useNavigationStatus from '../hooks/navigationHook';
import LoginLayout from '../layout/LoginLayout';

const LoginScreen = () => {
    useNavigationStatus();
    return (<LoginLayout />)
};

export default LoginScreen;
