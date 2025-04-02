import { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import "@fontsource/anonymous-pro";

import { Atom } from "./AllSvgs";
import { Project } from "./ProjectData";
import { lightTheme, mediaQueries } from "./Themes";

import Card from "../subComponents/ProjectCard";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

// Outer container
const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  height: ${(props) => props.cardCount * 40}vh;

  ${mediaQueries(90)`
    height: auto;
    flex-direction: column;
    padding-top: 2rem;
  `}
`;

// Main card wrapper
const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 10vw);
  height: 40vh;
  display: flex;

  ${mediaQueries(50)`left: calc(8rem + 10vw);`}
  ${mediaQueries(40)`top: 30%; left: calc(6rem + 10vw);`}
  ${mediaQueries(40)`left: calc(1rem + 10vw);`}
  ${mediaQueries(25)`left: calc(1rem + 10vw);`}

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    align-content: center;
    align-self: center;
    justify-content: center;
    justify-self: center;
    justify-items: center;
    height: auto;
    margin: 0 1rem;
    padding-top: 1rem;
    gap: 1rem;
  }
`;

// Spinning Atom icon
const Rotate = styled.span`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;

  width: 80px;
  height: 80px;

  ${mediaQueries(40)`
    width: 60px;
    height: 60px;

    svg {
      width: 60px;
      height: 60px;
    }
  `}

  ${mediaQueries(25)`
    width: 50px;
    height: 50px;

    svg {
      width: 50px;
      height: 50px;
    }
  `}
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ProjectPage = () => {
  const ref = useRef(null);
  const atom = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const handleScroll = () => {
      const offset = -window.pageYOffset;

      if (window.innerWidth > 768) {
        element.style.transform = `translateX(${offset}px)`;
      } else {
        element.style.transform = `translateY(${offset}px)`;
      }

      if (atom.current) {
        atom.current.style.transform = `rotate(${offset}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          cardCount={Project.length}
        >
          <LogoComponent theme="dark" backButtonVisible />
          <SocialIcons theme="dark" />
          <BigTitle text="PROJECTS & COMPETITIONS" top="60%" left="10%" />

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Project.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
{/* 
          <Rotate ref={atom}>
            <Atom width={80} height={80} fill={lightTheme.text} />
          </Rotate> */}
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default ProjectPage;
