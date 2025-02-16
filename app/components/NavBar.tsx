import { NavLink } from "react-router";

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className="photo-profile">
                <NavLink to="/" className="custom-logo-link"><img src="assets/photo-profil.webp" alt="photo de profile de Yohem" /></NavLink>
                </li>
                <li className="name hide"><NavLink to="/">Yohem</NavLink></li>
                <li className="github">
                <NavLink to="https://github.com/yohemm" target="_blank"><i className="devicon-github-original colored"></i><span>Mon
                    GitHub</span></NavLink>
                </li>
            </ul>
            <ul>
                <li className={"skills-projects"}>
                <NavLink to="/projects"
                    style={({isActive, isPending, isTransitioning}) => ({
                        textDecoration: isActive?"underline":"none",
                    })}>Projets</NavLink>
                </li>
                <li className={"skills-nav"}>
                <NavLink to="/skills"
                    style={({isActive, isPending, isTransitioning}) => ({
                        textDecoration: isActive?"underline":"none",
                    })}>Compétances</NavLink>
                </li>
                <li className={"skills-formations"}>
                <NavLink to="/formations"
                    style={({isActive, isPending, isTransitioning}) => ({
                        textDecoration: isActive?"underline":"none",
                    })}>Formations</NavLink>
                </li>
            </ul>
        </nav>
    );
}