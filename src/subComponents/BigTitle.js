import styled from "styled-components";
import "@fontsource/press-start-2p"; // Defaults to weight 400.

const Text = styled.h1`
  pointer-events: none; /* Add this line to make the text unclickable */
  position: fixed;
  font-family: "Press Start 2P";
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  font-size: calc(3rem + 5vw); /* Adjust the base and multiplier as needed */
  z-index: 0;

  @media (max-width: 600px) {
    top: 5%;
    left: 12.5%;
    padding: 0 1rem;
    font-size: calc(1rem + 3vw); /* Adjust the base and multiplier as needed */
s  }
`;

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
