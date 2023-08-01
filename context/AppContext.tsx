import React, { createContext, useState } from "react";
import { JsxElement } from "typescript";

export const AppData = createContext<any>(null)

interface user {
    names: string
    friends: user[]
}
function AppContext({ children }: any) {

    const [currentUser, setCurrentUser] = useState<user | null>(null)
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