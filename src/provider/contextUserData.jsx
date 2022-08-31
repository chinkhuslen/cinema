import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userEntered,setUserEntered] = useState(false);

    return (
        <UserDataContext.Provider value={{ userEntered,setUserEntered }}>
            {children}
        </UserDataContext.Provider>
    )
}
export const useUserDataContext = () => useContext(UserDataContext);
