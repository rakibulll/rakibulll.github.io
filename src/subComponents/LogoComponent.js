import styled from "styled-components";
import { mediaQueries } from "../components/Themes";
import { NavLink } from "react-router-dom";
import "@fontsource/press-start-2p";

const Logo = styled.h1`
  display: inline-block;
  font-size:2em;

  color: #E0E1DD;
  font-family: "Press Start 2P";
  position: fixed;
  left: 2rem;
  top: 2rem;

  z-index: 3;

  &:before {
    content: "rakibul.";
  }

  @media (max-width: 768px) {
    &:before {
      content: "r\\a a\\a k\\a i\\a b\\a u\\a l\\a .";
      white-space: pre;
    }
  }

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;

const LogoComponent = (props) => {
  return (
    <NavLink to="/">
      <Logo color={props.theme} />
    </NavLink>
  );
};

export default LogoComponent;
