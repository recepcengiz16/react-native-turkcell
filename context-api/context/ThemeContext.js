import { createContext } from "react";

const ThemeContext= createContext();

export const ThemeContextProvider = ({children})=>{ // provider altında çağırılmalı ya componentler o yüzden children olarak yazıyoruz o componentleri
    return <ThemeContext.Provider>
        {children} 
    </ThemeContext.Provider>
}

export default ThemeContext;