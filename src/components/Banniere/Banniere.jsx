import { useContext } from "react";
import "./Banniere.scss"
import { LanguageContext } from "../../context/index.jsx";

function Banniere() {

    const { lang } = useContext(LanguageContext);

    return (
        <section className="banniere">
            <img className="banniere__img" src="/assets/Image/banniere.webp" alt= {lang==="fr" ? "ordinateur sur un bureau" : "computer on a desk"} />
            <div className="banniere__txt">
                <p>
                    <span className="txt__additional">{lang === "fr" ? "Bienvenue, " : "Welcome, "}</span>
                    <span className="txt__additional txt__additional--color">{lang === "fr" ? "Je suis " : "I am "} </span>
                </p>
                <h1 className="txt__main">
                    {lang === 'fr' ? (
                        <>
                            <span>Développeur </span>
                            <span>Web </span>
                            <span>Front-end</span>
                        </>
                    ) : (
                        <>
                            <span>Front-end </span>
                            <span>Web </span>
                            <span>Developer</span>
                        </>
                    )}
                </h1>
            </div>
        </section>
    )
}

export default Banniere
