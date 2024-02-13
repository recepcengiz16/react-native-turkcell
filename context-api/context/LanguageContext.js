import { createContext,useState } from "react";

const LanguageContext = createContext();

export const LanguageContextProvider = ({children})=> {

    const [lang, setLang] = useState("");

    const values= {
        lang,
        setLang
    }

    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}

export default LanguageContext;