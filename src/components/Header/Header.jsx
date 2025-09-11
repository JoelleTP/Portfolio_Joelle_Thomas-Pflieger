import { HashLink } from "react-router-hash-link";
import "./Header.scss"
import { useContext, useState } from "react";
import { navbarItem } from "../../data/data"
import { LanguageContext } from "../../context/index.jsx";

function Header() {

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    const { lang, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <header>
             <p className="mainlogo">Joëlle Thomas-Pflieger</p>
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
                <select className="button__translate" value={lang} onChange={handleLanguageChange}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </nav>
        </header>
    )
}

export default Header