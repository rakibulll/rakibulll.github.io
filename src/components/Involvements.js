import styled, { ThemeProvider } from 'styled-components'
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Masonry from 'react-masonry-css';

import { Involvements as involvementsData} from "./InvolvementsData";

import BlogComponent from "./InvolvementComponent";
import Loading from "../subComponents/Loading";
import { lightTheme, mediaQueries } from "./Themes";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const MainContainer = styled(motion.div)`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.text};
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
  column-count: 2;
  column-gap: calc(1rem + 2vw);
  margin: 0 auto;

  ${mediaQueries(50)`
    column-count: 1;
  `};
`;

const masonryBreakpoints = {
  default: 2,  // Default to 2 columns
  1024: 2,     // 2 columns for screens wider than 1024px
  768: 1,      // 1 column for screens smaller than 768px
};

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
  const [, setNumber] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumber(parseInt(num));
  }, []);

  const isMobile = window.innerWidth <= 768;
  return (
    <ThemeProvider theme={lightTheme}>
    <Suspense fallback={<Loading />} >
      <MainContainer initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <Container>
          <LogoComponent backButtonVisible={true} />
          <SocialIcons />
          <BigTitle text="INVOLVEMENTS" top="10%" left="1%" />

          <Center>
            <Masonry
              breakpointCols={masonryBreakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {involvementsData.map((involvement) => (
                <BlogComponent key={involvement.id} involvements={involvement} />
              ))}
            </Masonry>
          </Center>
        </Container>
      </MainContainer>
    </Suspense>
  </ThemeProvider>
);
};


export default Involvements;
