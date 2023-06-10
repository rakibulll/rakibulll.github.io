import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQueries } from "./Themes";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  overflow: hidden;
  border: 2px solid transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); // Dark tint color
    transition: opacity 0.3s ease;
    opacity: 1;
    z-index: 1;
  }


`;



const Box = styled.div`
  backdrop-filter: blur(2px);
  background-color: #E0E1DD;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: 25rem;
  border: 2px solid transparent;
  padding: 1rem;
  color: black;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: white;
    border: 2px solid white;
    background-color: ${(props) => props.theme.text};
    opacity: 100;
    transition: all 0.3s ease;

    ${ImageContainer}:before {
      opacity: 0;
    }
  }

  ${mediaQueries(50)`
    width:calc(60vw);
    
    
  `};
  ${mediaQueries(30)`
    height:auto;

  `};

  ${mediaQueries(25)`
    height:auto;
    padding:0.8rem;
    backdrop-filter: none;
  `};
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
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  ${mediaQueries(40)`
    font-size:calc(0.8em + 1vw);

  `};

  ${mediaQueries(25)`
    
    font-size:calc(0.6em + 1vw);



  `};

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
  ${mediaQueries(25)`
    
    font-size:calc(0.5em + 1vw);



  `};
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
  ${mediaQueries(25)`
    
    font-size:calc(0.5em + 1vw);



  `};
`;


const Container = styled(motion.div)``;
const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrcs  } = props.involvements;
  return (
    <Container variants={item}>
      <Box>
        <ImageContainer>
        <Carousel infiniteLoop showIndicators={false} showStatus={false}>
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
      </Box>
    </Container>
  );
};
export default BlogComponent;
