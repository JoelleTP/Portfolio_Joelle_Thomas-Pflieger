import { useState } from "react"
import { LanguageContext } from "."

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("fr");
    const toggleLang = () => {
    setLang(prev => (prev === "fr" ? "en" : "fr"));
    };
 
    return (
        <LanguageContext.Provider value={{ lang, toggleLang, setLanguage: setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}