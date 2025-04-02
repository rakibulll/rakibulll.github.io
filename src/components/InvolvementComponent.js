import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQueries } from "./Themes";
import { Carousel } from "react-responsive-carousel";
import Masonry from 'react-masonry-css';
import "@fontsource/pixelify-sans"; // make sure it's installed via npm/yarn
import "@fontsource/vt323"; // Uses the default weight

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 2px solid transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 0, 0, 0.5); // Dark tint color
    transition: opacity 0.3s ease;
    opacity: 1;
    z-index: 1;
  }
`;

const Box = styled.div`
  backdrop-filter: blur(2px);
  background-color: #A29881;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: fit-content;
  border: 2px solid transparent;
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  z-index: 5;
  transition: all 0.3s ease;

  ${mediaQueries(50)`
    width:calc(60vw);
  `};

  ${mediaQueries(30)`
    height:auto;
  `};

  ${mediaQueries(25)`
    height:auto;
    padding:0.8rem;
  `};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: #A29881;
      border: 2px solid #A29881;
      background-color: ${(props) => props.theme.text};
      opacity: 100;

      ${ImageContainer}:before {
        opacity: 0;
      }
    }
  }

  /* Apply styles on mobile mode */
  @media (max-width: 768px) {
    color: #A29881;
    border: 2px solid #A29881;
    background-color: ${(props) => props.theme.text};
    opacity: 100;

    ${ImageContainer}:before {
      opacity: 0;
    }
  }
`;



const Description = styled.p`
  color: ${(props) => props.theme.text};
  padding: 0.5rem 0;
  font-family: "VT323", monospace;
  font-size: 1.3rem;

  ${mediaQueries(25)`font-size: 1rem;`}

  ${Box}:hover & {
    color: #A29881;
  }

  @media (max-width: 768px) {
    color: #A29881;
  }
`;


const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  font-family: "VT323", monospace;
  font-size: 2rem;
  border-bottom: 1px solid #A29881;

  ${mediaQueries(40)`font-size: 1.3rem;`}
  ${mediaQueries(25)`font-size: 1.1rem;`}

  ${Box}:hover & {
    border-bottom: 1px solid #A29881;
  }

  @media (max-width: 768px) {
    color: #A29881;
    border-bottom: 1px solid #A29881;
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  font-family: "VT323", monospace;
  font-size: 1.3rem;

  ${mediaQueries(25)`font-size: 0.9rem;`}
`;

const Date = styled.span`
  padding: 0.5rem 0;
  font-family: "VT323", monospace;
  font-size: 1.2rem;

  ${mediaQueries(25)`font-size: 0.9rem;`}
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;


const Container = styled(motion.div)``;
const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrcs, description } = props.involvements;

  return (
    
    <Container variants={item}>
      <Box>
        <ImageContainer>
          <Carousel infiniteLoop showIndicators={false} showStatus={false} autoPlay>
            {imgSrcs.map((src, index) => (
              <div key={index}>
                <Image src={src} alt={name} />
              </div>
            ))}
          </Carousel>
        </ImageContainer>
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => (
            <Tag key={id}>#{t}</Tag>
          ))}
        </HashTags>
        <Date>{date}</Date>
        <Description>{description}</Description>
      </Box>
    </Container>
  );
};


export default BlogComponent;
