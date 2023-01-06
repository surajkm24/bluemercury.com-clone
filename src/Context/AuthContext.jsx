import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState({ data: {}, loggedin: false });

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}