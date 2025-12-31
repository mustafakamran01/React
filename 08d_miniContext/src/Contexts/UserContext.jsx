const { createContext, useContext, useState, Children } = require("react");

export const userContext = createContext();

const UserProvider = ({Children}) => {

    const [user, setUser] = useState({})

    return(
        <userContext.Provider value={{user, setUser}}>
            {Children}
        </userContext.Provider>
    )
}

