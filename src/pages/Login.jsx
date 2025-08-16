import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <MyInput type="text" placeholder="Enter your login..." />
                <MyInput type="password" placeholder="Enter your password..." />
                <MyButton>Log in</MyButton>
            </form>
        </div>
    );
};

export default Login;