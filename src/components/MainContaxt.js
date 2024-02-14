import React,{createContext, useContext,useState} from "react"

const mainContext=createContext();
export const useMainContext=()=>useContext(mainContext);

const MainContext=({children})=>{
    const[darkMode,setDarkMode]=useState(true);
    const values={
        darkMode,
        setDarkMode
    }
    return <mainContext.Provider value={values}>{children}</mainContext.Provider>
}
export default MainContext