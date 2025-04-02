import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { lightTheme, mediaQueries } from "../components/Themes";

// import "@fontsource/anonymous-pro" // Defaults to weight 400.
import "@fontsource/press-start-2p"; // Defaults to weight 400.

const Box = styled(motion.li)`
  width: 16rem;
  height: 35vh;
  background-color: #A29881;
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #A29881;

  transition: all 0.2s ease;

  @media screen and (min-width: 768px) {
    &:hover {
      background-color: ${(props) => props.theme.text};
      color: #A29881;
      border: 3px solid #A29881;
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
  font-size: 2rem;
  font-family: "VT323", monospace;

  ${mediaQueries(25)`font-size: 1.25rem;`}
  ${mediaQueries(20)`font-size: 1.1rem;`}
`;

const Description = styled.h4`
  font-size: 1.3rem;
  font-family: "VT323", monospace;
  font-weight: 400;

  ${mediaQueries(25)`font-size: 1rem;`}
  ${mediaQueries(20)`font-size: 0.95rem;`}
`;



const Tag = styled.span`
  font-family: "VT323", monospace;
  margin-right: 1rem;
  font-size: 1.3rem;

  ${mediaQueries(25)`font-size: 0.9rem;`}
  ${mediaQueries(20)`font-size: 0.85rem;`}
`;

const Tags = styled.div`
  font-family: "VT323", monospace;
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
        fill: #A29881;
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

        {/* <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={60} height={60} fill={lightTheme.text} />
        </Git> */}
      </Footer>
    </Box>
  );
};

export default Card;
