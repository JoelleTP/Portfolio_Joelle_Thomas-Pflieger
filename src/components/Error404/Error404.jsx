import { Link } from "react-router"
import "./Error404.scss"
import { useContext } from "react"
import { LanguageContext } from "../../context/index.jsx"

function Error404() {

    const { lang } = useContext(LanguageContext)
    const errorPage = {
        message: { fr: "La page que vous demandez n'existe pas.", en: "The page you requested does not exist." },
        homeLink: { fr: "Retourner sur la page d'accueil", en: "Return to the homepage" }
    }
    return (
        <section className="errorPage">
            <h1 className="errorPage__title">404</h1>
            <p className="errorPage__txt">{errorPage.message[lang]}</p>
            <Link className="errorPage__link" to="/">{errorPage.homeLink[lang]}</Link>
        </section>
    )
}

export default Error404