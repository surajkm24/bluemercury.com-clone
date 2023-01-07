import { createContext, useContext, useState } from "react";

let data = JSON.parse(localStorage.getItem('yrucremeulbnekotUser')) || {}
let loggedin = data.email ? true : false;

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState({ data, loggedin });

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}