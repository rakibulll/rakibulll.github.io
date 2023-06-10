import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { lightTheme, mediaQueries } from "./Themes";
import "@fontsource/anonymous-pro" // Defaults to weight 400.

import { Programming1, Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() => import("../subComponents/ParticlesComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`

  background-color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;



  ${mediaQueries(80)`
            flex-direction:column;  
            padding:8rem 0;
            justify-content: space-between;
height:auto;
            &>*:nth-child(5){
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
            }
           
  `};

  
`;

const Main = styled(motion.div)`
  border: 2px solid #E0E1DD;
  color: #E0E1DD;
  background-color: transparent;
  backdrop-filter: blur(5px);
  padding: 2rem;
  width: 20vw;
  height: 45vh;
  z-index: 3;
  */line-height: 1.5;*/

  

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(80)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Anonymous Pro";

  display: inherit;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: #E0E1DD;
    background-color: ${(props) => props.theme.body};
  }
`;

const Title = styled.h2`
  font-family: "Anonymous Pro";
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.9em + 0.8vw);
  fill: #E0E1DD;

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: white;
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
font-family: "Anonymous Pro";

  color: #E0E1DD;
  font-size: calc(0.5em + 0.8vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: #E0E1DD;
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <ParticlesComponent theme="light" />




          <Main>
            <Title>
              <Programming1 width={40} height={40} /> Software Engineering
            </Title>

            <Description>
              <strong>Skills</strong> <br />
              <p>
                Object Oriented Programming, Multi-threading, Shell Scripting, Git, GCC/GDB
              </p>
            </Description>
            <Description>
              <strong>Languages</strong> <br />
              <ul>
                <li>C/C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>SQL/MySQL</li>
              </ul>
            </Description>
          </Main>



          <Main>
            <Title>
              <Develope width={40} height={40} /> Computer Vision
            </Title>

            <Description>
              <strong>Skills</strong> <br />
              <p>
                Machine Learning, RNN/DNN, Image Processing, Data Analytics
              </p>
            </Description>
            <Description>
              <strong>Tools / Framework</strong> <br />
              <p>TensorFlow, PyTorch, Pandas, Seaborn, Open3D, Anaconda</p>
            </Description>
          </Main>



          <Main>
            <Title>
              <Develope width={40} height={40} /> Web Development
            </Title>

            <Description>
              <strong>Skills</strong> <br />
              <p>
                HTML, CSS, JavaScript, React, Bootstrap, MongoDB, SQL, PHP
              </p>
            </Description>
            <Description>
              <strong>Tools</strong> <br />
              <p>VScode, Github, Codepen etc.</p>
            </Description>
          </Main>
          <BigTitle text="Skills" top="80%" right="30%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
