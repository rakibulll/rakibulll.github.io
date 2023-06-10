import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../components/Themes";
import "@fontsource/anonymous-pro" // Defaults to weight 400.
import React from 'react';

const Box = styled(motion.li)`
  width: 20rem;
  min-height: 48vh;
  background-color: #E0E1DD;
  color: ${(props) => props.theme.text};
  padding: 1rem 2rem;
  margin-right: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};

  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) => props.theme.text};
    color: white;
    border: 3px solid white;
  }

  ${mediaQueries(50)`
    width:16rem;
    margin-right:6rem;
    min-height:40vh;
    margin-top: 2rem;
  `};
  ${mediaQueries(40)`
    width:14rem;
    margin-right:4rem;
    min-height:40vh;
  `};
  ${mediaQueries(25)`
    width:15rem;
    margin-right:4rem;
    min-height:35vh;
    padding:1.5rem 1.5rem;
  `};
  ${mediaQueries(20)`
    width:10rem;
    margin-right:4rem;
    min-height:40vh;
  `};
`;

const Title = styled.h4`
  font-size: calc(1em + 0.6vw);
  font-family: "Anonymous Pro";


`;
const Description = styled.h4`
  font-family: "Anonymous Pro";
  font-size: calc(0.8em + 0.1vw);
  font-weight: 500;
  border-bottom: 2px solid ${props => props.theme.body};
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  ${Box}:hover & {
    border-bottom: 2px solid ${props => props.theme.icon};
  }

  ${mediaQueries(25)`
    font-size: calc(0.7em + 0.3vw);
  `}

  ${mediaQueries(20)`
    font-size: calc(0.6em + 0.3vw);
  `}
`;

const Description2 = styled.h4`
  font-family: "Anonymous Pro";
  font-size: calc(0.8em + 0.3vw);
  font-weight: 500;
  padding-top: 0.5rem;

 
  ${mediaQueries(25)`
    font-size: calc(0.7em + 0.3vw);
  `}

  ${mediaQueries(20)`
    font-size: calc(0.6em + 0.3vw);
  `}
`;

const Description3 = styled.h4`
  font-family: "Anonymous Pro";
  font-size: calc(0.8em + 0.1vw);
  font-weight: 500;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;

  ${mediaQueries(25)`
    font-size: calc(0.7em + 0.3vw);
  `}

  ${mediaQueries(20)`
    font-size: calc(0.6em + 0.3vw);
  `}
`;


const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1rem; // Padding to the bottom of the Footer

  ${mediaQueries(90)`
    padding-bottom: 0.5rem; // Padding to the bottom of the Footer

`};
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.text};
  color: white;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  width: 100%;
  text-align: center;

  ${Box}:hover & {
    background-color: white;
    color: ${(props) => props.theme.text};
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
`;


const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
  
};
const Card = (props) => {
  const { id, name, employer, description, additional, period, site } = props.data;

  return (
    <Box key={id} variants={item}>
      <Header>
        <Description><Title>{name}</Title></Description>
        <Description2 >
        {employer.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Description2>
        <Description2>{additional}</Description2>
        <Description>{period}</Description>
      </Header>
      <Content>
        <Description3>{description}</Description3>
        <Footer>
          <Link to={{ pathname: `${site}` }} target="_blank">
            Visit Site
          </Link>
        </Footer>
      </Content>
    </Box>
  );
};

export default Card;