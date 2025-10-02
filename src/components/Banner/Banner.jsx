import { useContext, useState, useEffect } from "react";
import "./Banner.scss"
import { LampContext, LanguageContext } from "../../context/index.jsx";

import TypewriterComponent from "typewriter-effect";

function Banner() {

    const { lang } = useContext(LanguageContext);
    const { lampOn, toggleLamp } = useContext(LampContext);

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    const introText =
        lang === "fr"? 
            ["<span class='txt__additional'>Bienvenue, </span>","<br />", "<span class='txt__additional txt__additional--color'>Je suis</span>", "<br />"]
        : 
            ["<span class='txt__additional'>Welcome, </span>","<br />", "<span class='txt__additional txt__additional--color'>I am</span>", "<br />"];

    const mainText =
        lang === "fr" ? 
            "<span class='txt__main'><span>Développeur </span><span>Web </span><span>Front-end</span></span>"
        : 
            "<span class='txt__main'><span>Front-end </span><span>Web </span><span>Developer</span></span>";

    const mainTextOff =
        lang === "fr"? 
        "<span class='txt__main txt__dark'>Bonjour, allumez la lampe pour éclairer mon profil</span>"
        : 
        "<span class='txt__main txt__dark'>Hello, switch on the lamp to reveal my profile</span>";

    useEffect(() => {
        const checkScreen = () => setIsSmallScreen(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <section className="banner">
            <img className="banner__img" src="/assets/Image/banniere.webp" alt= {lang==="fr" ? "ordinateur sur un bureau" : "computer on a desk"} />
            <div className="banner__lamp">
                <div className={`lamp-halo ${lampOn ? "lamp-halo--on" : ""}`} /> {/* Glow effect around the lamp bulb */}
                <svg
                    viewBox="0 0 512 512"
                    className="lamp"
                >
                    <path
                        style={{ fill: lampOn ? "#FFF1D5" : "#848481ff" }} 
                        d="M401.837,193.594c0.105,1.292,0.151,2.584,0.151,3.899c0,27.537-22.335,49.86-49.872,49.86c-12.36,0-23.673-4.504-32.391-11.965L401.837,193.594z"
                    /> {/* Change of color of the lamp bulb */}
                    <path
                        style={{ fill: "#9B5936" }}
                        d="M363.615,105.197c35.743,2.91,69.181,23.731,86.639,58.031l2.316,4.539l-50.733,25.826l-82.111,41.795l-57.623,29.33l-2.304-4.539c-17.458-34.299-14.618-73.592,4.05-104.202L363.615,105.197z"
                    />
                    <path
                        style={{ fill: "#82442E" }}
                        d="M308.208,237.866c-17.645-34.668-15.424-74.223,2.429-105.703l-46.788,23.814c-18.669,30.61-21.508,69.902-4.05,104.202l2.304,4.539l47.471-24.162L308.208,237.866z"
                    />
                    <path
                        style={{ fill: "#9B5936" }}
                        d="M330.084,39.299l33.531,65.899l-99.767,50.78l-15.91-31.25L232.086,93.57l-1.769-3.48c-4.143-8.135-6.099-16.806-6.099-25.349c0-20.391,11.173-40.049,30.587-49.93C282.354,0.786,316.059,11.75,330.084,39.299z"
                    />
                    <path
                        style={{ fill: "#82442E" }}
                        d="M280.526,109.597L264.674,78.44l-1.769-3.48c-4.143-8.135-6.099-16.806-6.099-25.349c0-15.173,6.195-29.934,17.36-40.568c-6.57,0.711-13.124,2.593-19.362,5.768c-19.413,9.881-30.587,29.539-30.587,49.93c0,8.543,1.955,17.214,6.099,25.349l1.769,3.48l15.852,31.157l15.91,31.25l32-16.287L280.526,109.597z"
                    />
                    <path
                        d="M59.437,503.266
                        h222.311
                        v-35.885
                        a15,15 0 0 0 -15,-15
                        h-192.311
                        a15,15 0 0 0 -15,15
                        v35.885
                        z"
                        style={{ fill: "#9B5936" }}
                    />
                    <path
                        d="M59.437,503.266
                        h45.263
                        v-35.885
                        a15,15 0 0 0 -15,-15
                        h-15.263
                        a15,15 0 0 0 -15,15
                        v35.885
                        z"
                        style={{ fill: "#82442E" }}
                    />
                    <g>
                        <path
                            style={{ fill: "#82442E" }}
                            d="M247.938,124.727c-8.776,4.97-27.072,16.294-47.288,34.544c-12.686,11.441-26.117,25.617-38.443,42.644c-22.893,31.646-37.57,66.993-43.622,105.075c-2.13,13.373-3.189,27.13-3.189,41.224c0,32.996,5.819,67.854,17.4,104.167H96.285c-15.666-53.585-19.716-104.574-12.011-151.909c7.1-43.68,24.127-84.171,50.594-120.333c17.225-23.534,36.15-42.086,53.038-56.064c19.076-15.805,35.58-25.757,44.169-30.505h0.012L247.938,124.727z"
                        /> 
                        <path
                            style={{ fill: "#713729" }}
                            d="M247.938,124.727c-8.776,4.97-27.072,16.294-47.288,34.544l-12.744-35.196c19.076-15.805,35.58-25.757,44.169-30.505h0.012L247.938,124.727z"
                        />
                        
                    </g>
                    <g 
                        style={{ cursor: "pointer" }}
                        role="button"
                        aria-label={
                            lampOn
                                ? lang === "fr" ? "Éteindre la lampe" : "Turn off the lamp"
                                : lang === "fr" ? "Allumer la lampe" : "Turn on the lamp"
                        }
                        onClick={toggleLamp}
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") toggleLamp(); }}
                        className="lamp__button"
                    > {/* Red lamp button with reduced height to simulate on/off */}
                        <path
                            d={
                            lampOn
                                ? 
                                "M177.724,452.386 h67.388 v-17.301 a8 8 0 0 0 -8,-8 h-51.388 a8 8 0 0 0 -8,8 v17.301 z"
                                :
                                "M177.724,452.386 h67.388 v-26.602 a8 8 0 0 0 -8,-8 h-51.388 a8 8 0 0 0 -8,8 v26.602 z"
                            }
                            style={{ fill: "red", transition: "all 0.2s ease" }}
                        />
                          <path
                            d={
                            lampOn
                                ? "M177.724,452.386 h28.98 v-17.301 a8 8 0 0 0 -8,-8 h-12.98 a8 8 0 0 0 -8,8 v17.301 z"
                                : "M177.724,452.386 h28.98 v-26.602 a8 8 0 0 0 -8,-8 h-12.98 a8 8 0 0 0 -8,8 v26.602 z"
                            }
                            style={{ fill: "red", transition: "all 0.2s ease" }}
                        />
                    </g>
                </svg>
            </div>
            {showArrow && !lampOn && (
                <div className="banner__arrow">
                <svg
                    className="arrow"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <line x1="12" y1="0" x2="12" y2="16" stroke="#00ff41" strokeWidth="4" strokeLinecap="round" />
                    <polygon points="6,16 12,22 18,16" fill="#00ff41" />
                </svg>
                </div>
            )}
            <h1 className="banner__txt">
                    <TypewriterComponent
                        key={`intro-${lang}--${lampOn}-${isSmallScreen}`}
                        onInit={(typewriter) => {
                            const typeIntro = () => {
                            introText.forEach((text) => typewriter.typeString(text));
                            };
                            if (lampOn) {
                                typeIntro();
                                if (isSmallScreen) {
                                    typewriter
                                    .pauseFor(300)
                                    .deleteAll()
                                    .pauseFor(300);
                                }
                                typewriter.typeString(mainText).start();
                            } else {
                                typewriter
                                .typeString(mainTextOff)
                                .callFunction(() => {
                                    setShowArrow(true);
                                    setTimeout(() => setShowArrow(false), 4000);
                                })
                                .start();
                            }
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            delay: 75,
                        }}
                    />
            </h1>
        </section>
    )
}

export default Banner
