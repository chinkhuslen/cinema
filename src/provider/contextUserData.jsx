import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [userEntered,setUserEntered] = useState(false);
    const [userPhoneNumber,setUserPhoneNumber] = useState();

    return (
        <UserDataContext.Provider value={{ userEntered,setUserEntered,userPhoneNumber,setUserPhoneNumber }}>
            {children}
        </UserDataContext.Provider>
    )
}
export const useUserDataContext = () => useContext(UserDataContext);
