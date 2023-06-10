import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import { mediaQueries } from "./Themes";
import "@fontsource/anonymous-pro" // Defaults to weight 400.
import "@fontsource/press-start-2p"; // Defaults to weight 400.

const Box = styled(motion.div)`

  /* width: 50vw;
height:50vh;
 */
  width: 55vw;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 6px;
  
  

  border-left: 6px solid ${(props) => props.theme.body};
  border-right: 6px solid ${(props) => props.theme.text};

  z-index: 1;

  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${mediaQueries(40)`
    width: 60vw;
    
  
  `};

  ${mediaQueries(30)`
    width: 70vw;
    
  
  `};
  ${mediaQueries(20)`
    width: 60vw;
    
  
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }

  //height:55vh;
`;

const SubBox = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 13%;
    left: 50%;
    transform: translate(-50%, 0%);
    
    width: 60%;
    height: auto;
  }
  ${mediaQueries(50)`
  
      width: 100%;
      height: 50%;
      .pic {
    
    width: 40%;
    left: 50%;
    
  }

  `};

  ${mediaQueries(40)`
  
      .pic {
    
    width: 50%;
    left: 50%;

  }

  `};

  ${mediaQueries(30)`
     

      .pic {
    
    width: 70%;
    bottom: 10%;
    left: 50%;

  }

  `};
  ${mediaQueries(20)`
     

     .pic {
   
   width: 80%;
   
 }

 `};
`;

const Text = styled(motion.div)`
  font-size: calc(0.5rem + 1.2vw);
  color: #9B3544;
  padding-left: 2rem;
  text-align: left;
  font-family: "Press Start 2P";
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-size: calc(0.5rem + 0.8vw);
    font-weight: 300;

    ${mediaQueries(40)`
        font-size: calc(0.5rem + 0.8vw);
  `};
  }

  ${mediaQueries(40)`
        font-size: calc(1rem + 1vw);
        padding-left: 0.5rem;
  `};
  ${mediaQueries(20)`
        font-size: calc(0.5rem + 1vw);
         padding-left: 0.5rem;

  `};
`;

const Intro = () => {
  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hello World!</h1>

          <h6>I'm Rakibul, a Computer Science student at the crossroads of innovation and code. Step into my digital portfolio and explore my universe of programming and tech.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="My Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
