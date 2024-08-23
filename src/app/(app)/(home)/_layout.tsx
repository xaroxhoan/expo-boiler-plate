import {Redirect, Stack} from "expo-router";
import {useSelector} from "react-redux";

export default function () {
    const isLoggedIn = useSelector(s => s.auth.isLoggedIn);

    if(!isLoggedIn) return <Redirect href="/auth" />;

    return <Stack />
}