import { useContext, useState, useEffect } from "react";
import "./Banniere.scss"
import { LanguageContext } from "../../context/index.jsx";
import TypewriterComponent from "typewriter-effect";

function Banniere() {

    const { lang } = useContext(LanguageContext);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const introText =
        lang === "fr"? 
            ["<span class='txt__additional'>Bienvenue, </span>","<br />", "<span class='txt__additional txt__additional--color'>Je suis</span>", "<br />"]
        : 
            ["<span class='txt__additional'>Welcome, </span>","<br />", "<span class='txt__additional txt__additional--color'>I am</span>", "<br />"];

    const mainText =
        lang === "fr" ? 
            "<h1 class='txt__main'><span>Développeur </span><span>Web </span><span>Front-end</span></h1>"
        : 
            "<h1 class='txt__main'><span>Front-end </span><span>Web </span><span>Developer</span></h1>";

    useEffect(() => {
        const checkScreen = () => setIsSmallScreen(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <section className="banniere">
            <img className="banniere__img" src="/assets/Image/banniere.webp" alt= {lang==="fr" ? "ordinateur sur un bureau" : "computer on a desk"} />
            <div className="banniere__txt">
                    <TypewriterComponent
                        key={`intro-${lang}-${isSmallScreen}`}
                        onInit={(typewriter) => {
                            if (isSmallScreen) {
                                introText.forEach((text) => typewriter.typeString(text));
                                typewriter
                                .pauseFor(300)
                                .deleteAll()
                                .pauseFor(300)
                                .typeString(mainText)
                                .callFunction(() => {
                                    const cursor = document.querySelector(".Typewriter__cursor");
                                    if (cursor) cursor.classList.add("Typewriter__cursor--hidden");
                                })
                                .start();
                            }
                            else {
                                introText.forEach((text) => typewriter.typeString(text));
                                typewriter
                                .typeString(mainText)
                                .callFunction(() => {
                                    const cursor = document.querySelector(".Typewriter__cursor");
                                    if (cursor) cursor.classList.add("Typewriter__cursor--hidden");
                                })
                                .start();
                            }
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 75,
                            cursor: ""
                        }}
                    />
            </div>
        </section>
    )
}

export default Banniere
