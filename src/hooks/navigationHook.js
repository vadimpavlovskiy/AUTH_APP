
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function useNavigationStatus() {
    const navigate = useNavigation()
    const error = useSelector(state => state.user.error);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if (user !== null && !error) {
            navigate.navigate('Home');
        } else {
            navigate.navigate('Login')
        }
    }, [error, navigate, user]);
}

export default useNavigationStatus;