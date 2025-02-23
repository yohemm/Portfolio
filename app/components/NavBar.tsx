import { NavLink, useNavigate } from "react-router";
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from "@uidotdev/usehooks";

export const NavBar = () => {
    const navigate = useNavigate();


    const [{ x, y }, scrollTo] = useWindowScroll();

    const [ nameHide, setNameHide] = useState("hide");
    const [ navSticked, setNavSticked] = useState("");
    const [ githubHide, setGithubHide] = useState("");
    const [ logoDown, setLogoDown] = useState("");

    useEffect(() => {
        if (y != null && y > 120){
            setNameHide("");
            setNavSticked('nav-sticked');
            setGithubHide('hide');
            setLogoDown('down');
        }else {
            setNameHide("hide");
            setNavSticked("");
            setGithubHide("");
            setLogoDown("");
        }
    }, [y])

    return (
        <nav className={ navSticked }>
            <ul>
                <li className={ "photo-profile" }>
                <NavLink to="/" className="custom-logo-link"><img className={ logoDown } src="/assets/photo-profil.webp" alt="photo de profile de Yohem" /></NavLink>
                </li>
                <li className={ "name " + nameHide}><NavLink to="/">Yohem</NavLink></li>
                <li className={"github " + githubHide}>
                <NavLink to="https://github.com/yohemm" target="_blank"><i className="devicon-github-original colored"></i><span>Mon
                    GitHub</span></NavLink>
                </li>
            </ul>
            <ul>
                <li className={"skills-nav"}>
                <NavLink to="/skills"
                    style={({isActive}) => ({
                        textDecoration: isActive?"underline":"none",
                    })}>Compétances</NavLink>
                </li>
                <li className={"skills-projects"}>
                <NavLink to="/projects"
                    style={({isActive}) => ({
                        textDecoration: isActive?"underline":"none",
                    })}>Projets</NavLink>
                </li>
                <li className={"skills-formations"}>
                <NavLink to="/formations"
                    style={({isActive}) => ({
                        textDecoration: isActive?"underline":"none",
                    })}>Formations</NavLink>
                </li>
            </ul>
        </nav>
    );
}