const { createContext, useContext } = require("react");

export const userContext = createContext();

export const UserProvider = userContext.Provider

export default useUser = () => {
    return useContext(userContext)
}