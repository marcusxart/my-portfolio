import React from "react";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";

import video from "../../assets/videos/gradient-bg.mp4";
import waves from "../../assets/images/wave.png";
import computer from "../../assets/lottie/computer.json";

const Header = () => {
  return (
    <Container>
      <LeftContainer></LeftContainer>
      <RightContainer>
        <LottieWrap>
          <Player src={computer} className="player" loop autoplay />
        </LottieWrap>
      </RightContainer>
      <BgVideo>
        <video src={video} muted autoPlay loop></video>
      </BgVideo>
      <Waves>
        <img src={waves} alt="" />
      </Waves>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const BgVideo = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Waves = styled.div`
  position: absolute;
  left: -20%;
  right: -10%;
  height: 100%;
  bottom: -2vh;
  display: flex;
  z-index: -1;
  align-items: flex-end;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
`;

const LottieWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .player {
    width: 120%;
    height: 120%;
  }
`;

const RightContainer = styled.div`
  flex: 1;
`;
