import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { lightTheme, mediaQueries } from "../components/Themes";

// import "@fontsource/anonymous-pro" // Defaults to weight 400.
import "@fontsource/press-start-2p"; // Defaults to weight 400.

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: #E0E1DD;
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.text};

  transition: all 0.2s ease;

  @media screen and (min-width: 768px) {
    &:hover {
      background-color: ${(props) => props.theme.text};
      color: white;
      border: 3px solid white;
    }
  }

  ${mediaQueries(50)`
        width:16rem;
        margin-right:6rem;
        height:35vh;
        margin-top: 2rem;


  `};
  ${mediaQueries(40)`
        width:14rem;
        margin-right:4rem;
        height:35vh;
        
        

  `};
  ${mediaQueries(25)`
        width:12rem;
        margin-right:4rem;
        height:35vh;
        padding:1.5rem 1.5rem;
        
        

  `};
  ${mediaQueries(20)`
        width:10rem;
        margin-right:4rem;
        height:40vh;

        
        

  `};
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
  font-family: "Karla";

`;
const Description = styled.h4`
  font-size: calc(0.8em + 0.3vw);

  font-family: "Karla";
  font-weight: 500;
  ${mediaQueries(25)`
  font-size:calc(0.7em + 0.3vw);



  `};
  ${mediaQueries(20)`
  font-size:calc(0.6em + 0.3vw);



  `};
`;
const Tags = styled.div`
font-family: "Karla";

  border-top: 2px solid ${(props) => props.theme.text};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    ${Box}:hover & {
      border-top: 2px solid ${(props) => props.theme.icon};
    }
  }
`;
const Tag = styled.span`
font-family: "Karla";

  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);

  ${mediaQueries(25)`
  font-size:calc(0.7em);


  `};
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    ${Box}:hover & {
      & > * {
        fill: white;
      }
    }
  }
`;


const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};

const Card = (props) => {
  const { id, name, description, tags, github } = props.data;
  return (
    <Box key={id} variants={item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => (
          <Tag key={id}>#{t}</Tag>
        ))}
      </Tags>
      <Footer>

        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={60} height={60} fill={lightTheme.text} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
