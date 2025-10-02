import { HashLink } from "react-router-hash-link";
import "./Header.scss"
import { useContext, useState } from "react";
import { navbarItem } from "../../data/data"
import { LampContext, LanguageContext } from "../../context/index.jsx";

function Header() {

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const { lang, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

     const { lampOn } = useContext(LampContext);

    return (
        <header>
             <span className="mainlogo">Joëlle Thomas-Pflieger</span>
             <div className="header__content">
                <div className={`nav ${lampOn ? "nav--visible" : ""}`}>
                    <nav className={`navbar ${showLinks ? "navbar--open" : ""}`}>  
                        <ul className="navbar__menu">
                            {navbarItem.map((item, index) => (
                                <li className="navbar__item" key={index}>
                                    <HashLink smooth to={`${item.page === "Accueil" ? "" : "/" + item.page}/#${item.link}`}  onClick={handleShowLinks}>{item.title[lang]}</HashLink>
                                </li>
                            ))}
                        </ul>
                        <button className="navbar__burger" onClick={handleShowLinks} aria-label={lang==="fr" ? "Ouvrir/Fermer le menu de navigation" : "Open / close the navigation menu"}>
                            <span className="burger__bar"></span>
                        </button>               
                    </nav>
                </div>
                <select className="button__translate" value={lang} onChange={handleLanguageChange} aria-label={lang==="fr" ? "Choix de la langue de la page" : "Choose the page language"}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </header>
    )
}

export default Header