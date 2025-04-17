import styled from "styled-components";
import { mediaQueries } from "../components/Themes";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import resumePDF from "../assets/files/Rakibul_Hassan-Resume.pdf";
import "@fontsource/press-start-2p";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Logo = styled.h1`
    display: inline-block;
    font-size: 2rem;
    color: #A29881;
    font-family: "Press Start 2P";

    &:before {
        content: "rakibul.";
    }

    @media (max-width: 768px) {
        font-size: 1.25rem;
        &:before {
            content: "r\\a a\\a k\\a i\\a b\\a u\\a l\\a .";
            white-space: pre;
        }
    }

    ${mediaQueries(40)`
        font-size: 1.5rem;
        left: 1rem;
    `};
`;

const NavMenu = styled.nav`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    padding-left: 0.5rem;

    @media (max-width: 768px) {
        margin-top: 0;
        gap: 0.5rem;
    }
`;

const LogoComponent = () => {
    const location = useLocation();
    const history = useHistory();
    const isHome = location.pathname === "/";

    const NavItem = styled(NavLink)`
        color: #7B846E;
        font-family: "VT323", monospace;
        font-size: ${isHome ? "1.4rem" : "2rem"};
        text-decoration: none;

        &:hover {
            text-shadow: 0 0 2px #C0A973;
        }

        @media (max-width: 768px) {
            font-size: ${isHome ? "1.2rem" : "1.5rem"};
        }
    `;

    const Wrapper = styled.div`
        position: fixed;
        top: 2rem;
        left: 2rem;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (max-width: 768px) {
            flex-direction: ${isHome ? "row" : "column"};
            align-items: flex-start;
            gap: 1rem;
        }
    `;

    return (
        <Wrapper>
            <NavLink to="/">
                <Logo />
            </NavLink>

            {isHome ? (
                <NavMenu>
                    <NavItem to="/work">Work</NavItem>
                    <NavItem to="/Projects">Projects</NavItem>
                    <NavItem to="/Portfolio">Portfolio</NavItem>
                    <NavItem to="/involvements">Involvements</NavItem>
                    <NavItem as="a" href={resumePDF} target="_blank">Resume</NavItem>
                </NavMenu>
            ) : (
                <NavMenu>
                    <NavItem to="/">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </NavItem>
                </NavMenu>
            )}
        </Wrapper>
    );
};

export default LogoComponent;
