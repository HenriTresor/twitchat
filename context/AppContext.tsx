import { useContext, createContext, useState, useEffect } from "react";

export const AppData = createContext<any>(null)

interface user {
    email: string
    friends: user[]
}
function AppContext() {

    const [currentUser, setCurrentUser] = useState<null | user>(null)

    const value = {

    }
    return (
        <AppData.Provider value={value}>

        </AppData.Provider>
    )
}

export default AppContext