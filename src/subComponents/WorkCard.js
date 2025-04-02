import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../components/Themes";
import React from "react";

const Box = styled(motion.li)`
  width: 21rem;
  min-height: 50vh;
  background-color: #a29881;
  color: ${(props) => props.theme.text};
  padding: 1rem 1.5rem;
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  @media screen and (min-width: 768px) {
    &:hover {
      background-color: ${(props) => props.theme.text};
      color: #a29881;
      border: 3px solid #a29881;
    }
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
    width:13rem;
    margin-left:0.5rem;
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
  font-size: 2rem;
  font-family: "VT323", monospace;

  ${mediaQueries(25)`font-size: 1.1rem;`}
  ${mediaQueries(20)`font-size: 1rem;`}
`;

const Position = styled.h4`
  font-family: "VT323", monospace;
  font-size: 1.125rem;
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.body};
  padding: 0.5rem 0;

  @media screen and (min-width: 768px) {
    ${Box}:hover & {
      border-bottom: 2px solid ${(props) => props.theme.icon};
    }
  }

  ${mediaQueries(25)`font-size: 1rem;`}
  ${mediaQueries(20)`font-size: 0.9rem;`}
`;

const WorkPeriod = styled.h4`
  font-family: "VT323", monospace;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 2px solid ${(props) => props.theme.body};
  padding: 0.5rem 0;

  @media screen and (min-width: 768px) {
    ${Box}:hover & {
      border-bottom: 2px solid ${(props) => props.theme.icon};
    }
  }

  ${mediaQueries(25)`font-size: 0.9rem;`}
  ${mediaQueries(20)`font-size: 0.85rem;`}
`;

const EmployerName = styled.h4`
  font-family: "VT323", monospace;
  font-size: 1.3rem;
  font-weight: 500;
  padding-top: 0.5rem;

  ${mediaQueries(25)`font-size: 1rem;`}
  ${mediaQueries(20)`font-size: 0.9rem;`}
`;

const LocationText = styled.h4`
  font-family: "VT323", monospace;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0.5rem 0 1.5rem;
  font-style: italic;

  ${mediaQueries(25)`font-size: 0.9rem;`}
  ${mediaQueries(20)`font-size: 0.85rem;`}
`;

const Description = styled.h4`
  font-family: "VT323", monospace;
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem 0 1.5rem;

  ${mediaQueries(25)`font-size: 0.9rem;`}
  ${mediaQueries(20)`font-size: 0.85rem;`}
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.text};
  color: #a29881;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  width: 100%;
  text-align: center;
  font-family: "VT323", monospace;
  font-size: 1.3rem;

  @media screen and (min-width: 768px) {
    ${Box}:hover & {
      background-color: #a29881;
      color: ${(props) => props.theme.text};
    }
  }

  ${mediaQueries(25)`font-size: 0.65rem;`}
  ${mediaQueries(20)`font-size: 0.6rem;`}
`;


const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 1rem;

  ${mediaQueries(90)`
    padding-bottom: 0.5rem;
  `};
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
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, employer, description, location, period, site } = props.data;

  return (
    <Box key={id} variants={item}>
      <Header>
        <Position>
          <Title>{name}</Title>
        </Position>
        <EmployerName>
          {employer.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </EmployerName>
        <LocationText>{location}</LocationText>
        <WorkPeriod>{period}</WorkPeriod>
      </Header>

      <Content>
        <Description>{description}</Description>
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
