import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {setIsAuthenticated} = UserAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate authentication process
        setIsAuthenticated(true);
        navigate("/");
    }; 
     
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};



export default Login;

