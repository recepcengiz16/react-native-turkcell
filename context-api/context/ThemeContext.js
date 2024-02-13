import { createContext,useContext,useState } from "react";

const ThemeContext= createContext();

const [theme, setTheme] = useState(""); 

export const ThemeContextProvider = ({children})=>{ // provider altında çağırılmalı ya componentler o yüzden children olarak yazıyoruz o componentleri
    return <ThemeContext.Provider value={{theme,setTheme}}>
        {children} 
    </ThemeContext.Provider>
}

export const useTheme = ()=>useContext(ThemeContext);

export default ThemeContext;