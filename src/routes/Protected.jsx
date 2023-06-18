import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Protected({ children }) {
    const { IsAuthenticated } = useContext(AuthContext)
    if (IsAuthenticated.IsAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}