import { createContext, useContext, useState } from "react";

// Create a context that can be shared with other components
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// Share the created context with other components
export default function AuthProvider({children}){

    // Put some state in the context
    const [number,setNumber] = useState(0)

    const [isAuthenticated, setAuthenticated] = useState(false)
    
    // setInterval(() => setNumber(number+1), 3000)
    function login(username, password){
        if (username === "admin" && password === "pass1234") {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    const valueToBeShared = {number, isAuthenticated, setAuthenticated, login, logout}

    return(
        <AuthContext.Provider value={valueToBeShared}>
            {children}
        </AuthContext.Provider>
    )
}