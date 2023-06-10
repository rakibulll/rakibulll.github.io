import styled, { keyframes, ThemeProvider } from 'styled-components'
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Involvements as involvementsData} from "./InvolvementsData";

import BlogComponent from "./InvolvementComponent";
import Loading from "../subComponents/Loading";
import { lightTheme, mediaQueries } from "./Themes";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const MainContainer = styled(motion.div)`
  // background-color: ${(props) => props.theme.text};

  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.text};

  //width:100vw;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  ${mediaQueries(30)`
    padding-top: 7rem;
    
  
  `};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));

  grid-gap: calc(1rem + 2vw);

  ${mediaQueries(50)`
    grid-template-columns: 100%;

    
  
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

const Involvements = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumber(parseInt(num));
  }, []);
  return (
    <ThemeProvider theme={lightTheme}>

    <Suspense fallback={<Loading />} >
      <MainContainer 
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Container>
          <LogoComponent />


          <SocialIcons />
          {/* <AnchorComponent number={number} /> */}
          <BigTitle text="Involvements" top="5rem" left="5rem"/>

          <Center>
            <Grid variants={container} initial="hidden" animate="show">
              {involvementsData.map((involvements) => (
                <BlogComponent key={involvements.id} involvements={involvements} />
              ))}
            </Grid>
          </Center>

        </Container>
      </MainContainer>
    </Suspense>
    </ThemeProvider>
  );
};

export default Involvements;
