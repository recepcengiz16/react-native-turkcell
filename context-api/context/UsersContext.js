import {createContext, useContext, useState} from "react";

const UserContext = createContext();

export const UserContextProvider = ({children})=>{

    const [users,setUsers]=useState([
        {id:1,name:"Ceylan"},
        {id:2,name:"Recep"}
    ])

    const values = {
        users,
        setUsers
    }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>

}

export const useUsers = ()=>{
    const context = useContext(UserContext);

    if (context===undefined) {
        throw new Error("setUsers hook must be call inside UserContextProvider");
    }

    return context;
}