import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/files/Rakibul_Hassan-Resume.pdf";
import "@fontsource/press-start-2p";

import Intro from "./Intro";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));

// ---- New CodeLogo Component ----
const CodeLogoWrapper = styled.div`
  color: #fff;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 100px;
  opacity: 0.8;
  display: flex;
  gap: 0.2em;
  color: #A29881;

  span {
    display: inline-block;
    animation: pulse_414 0.4s alternate infinite ease-in-out;
  }

  span:nth-child(odd) {
    animation-delay: 0.4s;
  }

  @keyframes pulse_414 {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;

const CodeLogo = () => (
  <CodeLogoWrapper>
    <span>{`{`}</span>
    <span>{`}`}</span>
  </CodeLogoWrapper>
);
// --------------------------------

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2 {
    font-family: "Press Start 2P";
    font-size: 1em;
    font-weight: 400;

    ${mediaQueries(40)`font-size: 0.8em;`}
    ${mediaQueries(30)`font-size: 0.6em;`}
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;

  @media only screen and (max-width: 50em) {
    display: none;
  }
`;

const ClickMe = styled.span`
  color: #A29881;
  font-family: "Press Start 2P";
  font-size: 10px;
  padding-top: 1rem;
`;

const LogoWrapper = styled.div`
  position: fixed;
  top: 5rem;
  left: 2rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavMenu = styled.nav`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  padding-left: 0.5rem;

  ${mediaQueries(40)`gap: 1rem;`}
`;

const NavItem = styled(NavLink)`
  color: #e0e1dd;
  font-family: "Press Start 2P";
  font-size: 0.7em;
  text-decoration: none;
  text-align: left;

  &:hover {
    text-shadow: 0 0 5px #fff;
  }

  &.active {
    text-shadow: 0 0 8px #00ffc3;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #050800;
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>props.click ? mediaQueries(50)`
    height: 50%; 
    right: 0; 
    width: 100%; 
    transition: width 0.5s ease, height 1s ease 0.5s;`
    : mediaQueries(50)`
    height: 0; 
    width: 0;`
  };
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");
  const handleClick = () => setClick(!click);
  const moveY = { y: "-100%" };
  const moveX = { x: `${path === "work" ? "100%" : "-100%"}` };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "involvements" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click} />
        <Container>
          <LogoWrapper>
            <LogoComponent backButtonVisible={true} />
          </LogoWrapper>

          <SocialIcons theme={click ? "dark" : "light"} />

          <Center click={click} onClick={handleClick}>
            <CodeLogo />
            {!click && <ClickMe>Click Me</ClickMe>}
          </Center>
        </Container>

        {click && <Intro click={click} />}
      </MainContainer>
    </Suspense>
  );
};

export default Main;