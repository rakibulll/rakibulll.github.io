import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/files/Rakibul_Hassan-Resume.pdf";
import "@fontsource/press-start-2p"; // Defaults to weight 400.

//Components
import { Cube2 } from "./AllSvgs";
import Intro from "./Intro";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";

const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("./../subComponents/LogoComponent"));
const MainContainer = styled(motion.div)`

  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Press Start 2P";
    font-size:1em;
    font-weight: 400;
  }

  h2 {
    ${mediaQueries(40)`
      font-size:0.8em;

  `};

    ${mediaQueries(30)`
      font-size:0.6em;

  `};
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
from {
    transform: rotate(0) ;
  }
  to {
    transform: rotate(360deg) ;
  }
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
  & > *:first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
    width: ${(props) => (props.click ? "80px" : "150px")};
    height: ${(props) => (props.click ? "80px" : "150px")};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? "40px" : "150px")};
    height: ${(props) => (props.click ? "40px" : "150px")};
  }
`;

const ClickMe = styled.text`
  color: #E0E1DD;
  font-family: "Press Start 2P";
  font-size: 10px;
  text-decoration: none;

`;

const DownloadResume = styled(NavLink)`
color: #E0E1DD;
position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;


const WORK = styled(NavLink)`
color: #E0E1DD;
position: absolute;
  top: 60%;
  right: calc(-2rem + -1.2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;
const PROJECT = styled(NavLink)`
  color: #E0E1DD;
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: #E0E1DD;
  text-decoration: none;
  z-index: 1;
`;
const INVOLVEMENTS = styled(NavLink)`
  color: #E0E1DD;
  text-decoration: none;
`;
const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: #111319;
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");

  const handleClick = () => setClick(!click);

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick();
    }, 800); // Change the delay to whatever you see fit

    // Clean up function
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
          <LogoComponent theme={click ? "dark" : "dark"} />
          {mq ? (
            <SocialIcons theme="light" />
          ) : (
            <SocialIcons theme={click ? "dark" : "light"} />
          )}
          
          <Center click={click}>
            {mq ? (
              <Cube2
                onClick={() => handleClick()}
                width={click ? 80 : 150}
                height={click ? 80 : 150}
                fill="currentColor"
              />
            ) : (
              <Cube2
                onClick={() => handleClick()}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="currentColor"
              />
            )}
            <ClickMe> </ClickMe>
          </Center>

          {mq ? (
            
            <DownloadResume
              click={+click}
              target="_blank"
              to={{ pathname: resumePDF }}
              
            >
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume.
                
              </motion.h2>
            </DownloadResume>
          ) : (
            <DownloadResume
              click={+false}
              target="_blank"
              to={{ pathname: resumePDF }}
            >
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume.
              </motion.h2>
            </DownloadResume>



          )}
          {mq ? (
            <WORK click={+click} onClick={() => setpath("work")} to="/work">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Work Experience.
              </motion.h2>
            </WORK>
          ) : (
            <WORK click={+false} onClick={() => setpath("work")} to="/work">
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Work Experience.
              </motion.h2>
            </WORK>
          )}

          <PROJECT click={+click} to="/projects">
            <motion.h2
              onClick={() => setpath("projects")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects.
            </motion.h2>
          </PROJECT>

          <BottomBar>
            <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
              <motion.h2
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About.
              </motion.h2>
            </ABOUT>

            <INVOLVEMENTS to="/involvements">
              <motion.h2
                onClick={() => setpath("involvements")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Involvements.
              </motion.h2>
            </INVOLVEMENTS>
          </BottomBar>
        </Container>

        {click ? <Intro click={click} /> : null}
      </MainContainer>
    </Suspense>
  );
};

export default Main;
