import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import "@fontsource/anonymous-pro"
import "@fontsource/press-start-2p";

import { NavLink } from "react-router-dom"

import { lightTheme, mediaQueries } from './Themes'
import astronaut from "../assets/Images/spaceman.png"
import Loading from '../subComponents/Loading'

// Lazy Components
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticlesComponent = lazy(() => import('../subComponents/ParticlesComponent'))
const BigTitle = lazy(() => import('../subComponents/BigTitle'))

// Floating animation
const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`

// Styled Components

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueries(50)`height: 100vh;`}
  ${mediaQueries(40)`height: 100vh;`}
  ${mediaQueries(30)`height: 100vh;`}
  ${mediaQueries(25)`height: 100vh;`}
  ${mediaQueries(24)`height: 100vh;`}
`

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
  z-index: 4;
  width: 20vw;

  img {
    width: 100%;
    height: auto;
  }

  ${mediaQueries(40)`display: none;`}
`

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.text};
  border: 5px solid #A29881;
  color: #A29881;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  display: inline-block;
  margin-top: 1rem;

  &:hover {
    background-color: #A29881;
    color: ${(props) => props.theme.text};
  }
`

const Main = styled(motion.div)`
  border: 2px solid #A29881;
  color: #A29881;
  background: rgba(0, 0, 0, 0.3);
  padding: 1.5rem 1.5rem;
  width: 65vw;
  max-height: 70vh;
  overflow-y: auto;

  z-index: 3;
  line-height: 1.5;
  font-size: calc(1rem + 0.6vw);
  font-family: "VT323", monospace;
  backdrop-filter: blur(10px);

  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);

  ${mediaQueries(50)`
    width: 60vw;
    font-size: 1rem;
    padding: 1rem;
    top: 15%;
    left: 55%;
    max-height: 70vh;
  `}
`

// Main Component
const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key='about'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme='dark' backButtonVisible />
          <SocialIcons theme='dark' />
          <ParticlesComponent theme='dark' />

          <SpaceMan
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '0%',
              top: '60%',
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </SpaceMan>

          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            <div>
              Hi there! I'm <strong>Rakibul Hassan</strong>, a computer science enthusiast with a knack for code, collaboration, and creation. Immersed in the world of software architecture, web innovation, and machine learning, I thrive on turning complex problems into elegantly crafted solutions.
            </div>
            <br />
            <strong>CONTACT</strong>
            <hr color='#A29881'/>
            Let's forge new connections! Feel free to drop me an email or connect on LinkedIn. Whether you're brimming with internship offers, job prospects, learning opportunities, or just need a tech-savvy problem-solver — I'd love to hear from you.
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
