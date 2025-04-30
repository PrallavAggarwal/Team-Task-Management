import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData, setUserData] = useState()

    useEffect(() => {
        setLocalStorage()
        const {employees, admin} = getLocalStorage()
        // console.log('employees : ', employees)
        // console.log('admin : ', admin)
        setUserData({employees, admin})
    },[])
    
    console.log('userData : ', userData)
    return (
        <div>
            <AuthContext.Provider value={userData}>
            {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider