import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import "@fontsource/anonymous-pro" // Defaults to weight 400.
import { NavLink } from "react-router-dom";

import { lightTheme, mediaQueries } from './Themes'
import astronaut from "../assets/Images/spaceman.png";
import profile from "../assets/Images/my-image.png";
import Loading from '../subComponents/Loading';
//Components
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticlesComponent = lazy(() =>
  import('../subComponents/ParticlesComponent')
)
const BigTitle = lazy(() => import('../subComponents/BigTitle'))


const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  ${mediaQueries(90)`
  flex-direction:column;  
  height:120vh;
  &>*:nth-child(5){
  }
`};

  ${mediaQueries(40)`
  flex-direction:column;  
  height:180vh;
  &>*:nth-child(5){
  }
  `};
  
  ${mediaQueries(30)`
  flex-direction:column;  
  height:140vh;
  &>*:nth-child(5){
  }
  `};

  ${mediaQueries(25)`
  flex-direction:column;  
  height:180vh;
  &>*:nth-child(5){
  }
  `};
  ${mediaQueries(24)`
  flex-direction:column;  
  height:200vh;
  &>*:nth-child(5){
  }
  `};
`

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
  z-index: 4;
width:20vw;
  img{
    width:100%;
    height:auto;
  }
`

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.text};
  border: 5px solid white;
  color: white;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);

  &:hover {
    border: 5px solid white;
    background-color: white;
    color: ${(props) => props.theme.text};
  }
  
  `

const Main = styled(motion.div)`
  border: 2px solid white;
  color: white;
  background: blur; 
  padding: 2rem;
  width: 70vw;
  z-index: 3;
  line-height: 1.5;
  display: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.9rem + 0.6vw);
  backdrop-filter: blur(10px);
  height: auto;
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10.5rem;
  font-family: "Anonymous Pro";
  ${mediaQueries(40)`
          width: 60vw;
          height: auto;
          top:40%;
          left:50%;
          transform:translate(-50%,-50%);
          backdrop-filter: blur(10px);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          top:50%;
          backdrop-filter: none;
          // margin-top:2rem;
          backdrop-filter: blur(10px);

  `};

${mediaQueries(20)`
          padding: 1rem;
          top:40%;
          font-size: calc(0.5rem + 1vw);
          backdrop-filter: blur(10px);

  `};

`
const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading/>}>
        <Box
          key='skills'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <LogoComponent theme='dark' />
          <SocialIcons theme='dark' />
          <ParticlesComponent theme='dark' />
          <SpaceMan
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '10%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}>
              <img src={astronaut}  alt="spaceman" />
          </SpaceMan>
          <Main
          
          
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
            <div>
              <img src={profile} height={200} alt="Image" style={{ display: 'block', margin: '0 auto' }}/> {/* Add the image here */}
            </div>
            <div>
              Hi there! I'm Rakibul Hassan, a computer science enthusiast with a knack for code, collaboration, and creation. Immersed in the world of software architecture, web innovation, and machine learning, I thrive on turning complex problems into elegantly crafted solutions.
            </div>
            <br />
            <strong>CONTACT</strong>
            <hr></hr>
            Let's forge new connections! Feel free to drop me an email or connect on LinkedIn. Whether you're brimming with internship offers, job prospects, learning opportunities, or just need a tech-savvy problem-solver, I'd love to hear from you. 
            Also, reach out to me if you believe I can help you somehow.
            <br />
            <br />
            <Link to={{ pathname: "mailto:rhassan1@svsu.edu" }} target="_blank">
              Email
            </Link>
            
          </Main>

          <BigTitle text='ABOUT' top='10%' left='5%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default AboutPage
