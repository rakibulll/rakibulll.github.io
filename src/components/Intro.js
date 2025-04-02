import { motion } from "framer-motion";
import styled from "styled-components";
import Me from "../assets/Images/raki.png";
import { mediaQueries } from "./Themes";

import "@fontsource/anonymous-pro";
import "@fontsource/vt323"; 

// Outer wrapper box
const Box = styled(motion.div)`
  width: 50vw;
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
  transform: translate(-50%, -50%);
  ${mediaQueries(1200)`width: 55vw;`}
  ${mediaQueries(60)`width: 50vw;`}
  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    justify-content: space-between;
    min-height: 40vh; 
  `}
  ${mediaQueries(40)`width: 55vw;`}
  ${mediaQueries(30)`width: 60vw;`}
  ${mediaQueries(20)`
    width: 60vw;
    min-height: 40vh; 
  `}

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
`;



// Each half of the box
const SubBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${mediaQueries(50)`width: 100%; height: 50%;`}
`;

// Profile picture styling
const ProfileImage = styled.img`
  position: relative;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 50vh;
  padding-top: 1rem;
  padding-bottom: 1rem;


  ${mediaQueries(50)`width: 40%; bottom: 12%; height: auto;`}
  ${mediaQueries(40)`width: 50%; height: auto;`}
  ${mediaQueries(30)`width: 70%; bottom: 8%; height: auto;`}
  ${mediaQueries(20)`width: 80%; height: auto;`}
`;

// Text content
const Text = styled(motion.div)`
  font-family: "VT323", monospace;
  font-size: 2.5em;
  color: #A29881;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  gap: 1.5rem;

  h6 {
    font-family: "VT323", monospace;
    font-size: 2rem;
    color: #53594B};
    margin-top: 1rem;
  }

  ${mediaQueries(40)`font-size: 2.4em; padding: 1rem; h6 { font-size: 1.4rem; }`}
  ${mediaQueries(20)`font-size: 2.2em; padding: 0.5rem; h6 { font-size: 1.3em; }`}
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2>Hello World!</h2>
    
          <h6>
            I'm Rakibul, a Computer Science graduate at the crossroads of innovation and code.
          </h6>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <ProfileImage src={Me} alt="Rakibul's portrait" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
