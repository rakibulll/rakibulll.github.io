import { motion } from "framer-motion";
import { useEffect, useRef, lazy, Suspense } from "react";

import styled, { ThemeProvider } from "styled-components";
import "@fontsource/anonymous-pro" // Defaults to weight 400.

import { Atom } from "./AllSvgs";
import { Project } from "./ProjectData";
import { lightTheme, mediaQueries } from "./Themes";

import Card from "../subComponents/ProjectCard";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  
  height: ${(props) => props.cardCount * 40}vh;
  
  ${mediaQueries(90)`
    height: 380vh;
`};
`;
const Main = styled(motion.ul)`
  font-family: "Anonymous Pro";
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  /* Add this for mobile view */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically */
    position: top; /* Remove fixed positioning */
    overflow: auto; /* Enable scrolling */
    height: auto; /* Let height be determined by content */
  }

  ${mediaQueries(50)`
    left:calc(8rem + 15vw);
  `};

  ${mediaQueries(40)`
    top: 30%;
    left:calc(6rem + 15vw);
  `};

  ${mediaQueries(40)`
    left:calc(2rem + 15vw);
  `};

  ${mediaQueries(25)`
    left:calc(1rem + 15vw);
  `};
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;

  z-index: 1;
  ${mediaQueries(40)`
     width:60px;
         height:60px;   
       svg{
         width:60px;
         height:60px;
       }

  `};
  ${mediaQueries(25)`
        width:50px;
         height:50px;
        svg{
         width:50px;
         height:50px;
       }

  `};
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



const WorkPage = () => {
  const ref = useRef(null);

  const atom = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      if(window.innerWidth > 768) {
        // Desktop view - scroll horizontally
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
      } else {
        // Mobile view - scroll vertically
        element.style.transform = `translateY(${-window.pageYOffset}px)`;
      }

      return (atom.current.style.transform = "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);


  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
        
          key="work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          cardCount={Project.length}

        >
          
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <BigTitle text="PROJECTS" top="60%" right="10%" />

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Project.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>


          <Rotate ref={atom}>
            <Atom width={80} height={80} fill={lightTheme.text} />
          </Rotate>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default WorkPage;
