import Banner from "../components/Banner/Banner"
import Skills from "../components/Skills/Skills"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Formation from "../components/Formation/Formation"
import { useContext } from "react"
import { LampContext } from "../context"

function Accueil() {

    const { lampOn } = useContext(LampContext);

    return (
        <>
            <div className={`body__overlay ${lampOn ? "body__overlay--off" : ""}`} /> {/* Darken the page with a black overlay when the lamp is off */}
            <Banner />
            <div className={`sections ${lampOn ? "sections--visible" : ""}`}>
                <About />
                <Skills />
                {lampOn && (
                    <>
                        <Projects />
                        <Formation />
                    </>
                )}
            </div>
        </>
    )
}

export default Accueil