import React, { useContext, createContext, useState, useEffect } from "react";
import { JsxElement } from "typescript";

export const AppData = createContext<any>(null)

interface user {
    email: string
    friends: user[]
}
function AppContext({children}: any): any {

    const [currentUser, setCurrentUser] = useState<null | user>(null)
    const [isLoggedIn, setIsLogged] = useState<Boolean>(false)

    const value = {
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLogged
    }
    return (
        <AppData.Provider value={value}>
            {children}
        </AppData.Provider>
    )
}

export default AppContext