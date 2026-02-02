import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = UserAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};

export default ProtectedRoute;