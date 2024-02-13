import { createContext,useContext,useState } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({children})=> {

    const [lang, setLang] = useState("");

    const values= {
        lang,
        setLang
    }

    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}

export const useLang = ()=>{

    const context = useContext(LanguageContext);

    if (context===undefined) {
        throw new Error("useLang hook must be call inside LanguageContextProvider")
    }

    return context;
}


export default LanguageContext;