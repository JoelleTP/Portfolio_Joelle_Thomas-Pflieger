import { HashLink } from "react-router-hash-link";
import "./Header.scss"

function Header() {
    return (
        <header>
             <h1>Joëlle Thomas-Pflieger</h1>
             <nav>
                <ul>
                    <li><HashLink smooth to="/#about">À propos</HashLink></li>
                    <li><HashLink smooth to="/#skills">Compétences</HashLink></li>
                    <li><HashLink smooth to="/#projects">Projets</HashLink></li>
                    <li><HashLink smooth to="/#formation">Formation</HashLink></li>
                    <li><HashLink smooth to="/services/#services">Services</HashLink></li>
                    <li><HashLink smooth to="/services/#contact">Contact</HashLink></li>
                </ul>
                <button>FR</button>
            </nav>
        </header>
    )
}

export default Header