import Banniere from "../components/Banniere/Banniere"
import Skills from "../components/Skills/Skills"
import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import Formation from "../components/Formation/Formation"

function Accueil() {
    return (
        <>
            <Banniere />
            <About />
            <Skills />
            <Projects />
            <Formation />
        </>
    )
}

export default Accueil