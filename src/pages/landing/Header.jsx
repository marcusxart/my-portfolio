import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import wave from "../../assets/images/wave.png";
import computer from "../../assets/lottie/programmer.json";
import Button from "../../components/Button";

const Header = () => {
  return (
    <Container>
      <SocialLinks>
        <IconWrap>
          <FontAwesomeIcon icon={faLinkedin} />
        </IconWrap>
        <IconWrap>
          <FontAwesomeIcon icon={faGithub} />
        </IconWrap>
        <IconWrap>
          <FontAwesomeIcon icon={faEnvelope} />
        </IconWrap>
        <Line />
      </SocialLinks>
      <Wrapper>
        <LeftWrapper>
          <p className="sub-text">Hello, I'm</p>
          <h1>Chinonso Emerenwa</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quo a tempora, maxime voluptates consectetur ea, tenetur, tempore
            vitae ab magni deleniti earum. Aut, perspiciatis excepturi sit
            aperiam delectus suscipit. Rem, corporis laborum? Impedit totam
            deleniti quasi beatae odio ipsam.
          </p>
          <div>
            <Button title={"Resume"} />
          </div>
        </LeftWrapper>
        <RightWrapper>
          <img src={wave} alt="" />
          <Lottie loop animationData={computer} play className="lottie" />
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const LeftWrapper = styled.div`
  text-align: center;
  padding: 15vh 15vw 0;
  h1 {
    font-size: 5rem;
    line-height: 7rem;
    font-family: "Bowlby One SC", cursive;
    letter-spacing: 3px;
  }
  div {
    display: none;
  }
  @media screen and (max-width: 900px) {
    flex: 1;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      display: block;
      width: fit-content;
      margin-top: 2rem;
    }
    h1 {
      font-size: 3.5rem;
      line-height: 7rem;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 6vw;
      line-height: 12vw;
    }
  }
`;

const SocialLinks = styled.div`
  position: absolute;
  left: 5vw;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  @media screen and (max-width: 900px) {
    bottom: 60%;
    left: 3vw;
  }
`;

const IconWrap = styled.div`
  cursor: pointer;
  svg {
    width: 4rem;
    height: 4rem;
    color: var(--black);
  }
  @media screen and (max-width: 900px) {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Line = styled.div`
  width: 0.2rem;
  height: 12rem;
  background-color: var(--black);
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const RightWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    left: 0;
    bottom: -5vh;
    right: 0;
    width: 100%;
    z-index: -1;
  }
  .lottie {
    width: 25vw;
  }

  @media screen and (max-width: 900px) {
    background-color: var(--white);
    img {
      display: none;
    }

    .lottie {
      width: 50vw;
    }
  }

  @media screen and (max-width: 600px) {
    .lottie {
      width: 70vw;
    }
  }
`;
