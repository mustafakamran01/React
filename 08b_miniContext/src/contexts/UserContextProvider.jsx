import React, { useState } from "react";

const UserContext = React.createContext()
export default UserContext


export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState('')

    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}


