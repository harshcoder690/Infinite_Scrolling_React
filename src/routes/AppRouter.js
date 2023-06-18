import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home/home.jsx";
import { Login } from "../components/login/login.jsx";
import Protected from "./Protected.jsx";

export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Protected>
                            <Home />
                        </Protected>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

