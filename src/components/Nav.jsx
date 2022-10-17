import React from "react";
import styled from "styled-components";
import { Pivot as Hamburger } from "hamburger-react";

import Button from "./Button";

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <span>Chinonso.</span>
        </Logo>
        <ActionWrap>
          <Links>
            <li className="active">home</li>
            <li>about</li>
            <li>contact</li>
          </Links>
          <Button title="Resume" />
        </ActionWrap>
        <ToggleMenu>
          <Hamburger />
        </ToggleMenu>
      </Wrapper>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: var(--white);
  font-size: 1.8rem;
  padding: 0 5vw;
  z-index: 20;
  @media screen and (max-width: 900px) {
    color: var(--black);
    padding: 0 3vw;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const Logo = styled.div`
  font-family: "Pacifico", cursive;
  color: white;
  cursor: pointer;
  span {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 900px) {
    color: var(--black);
    span {
      font-size: 2rem;
    }
  }
`;

const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  text-transform: capitalize;

  .active {
    opacity: 1;
  }
  li {
    font-family: "Oswald", sans-serif;
    opacity: 0.5;
    cursor: pointer;
  }
`;

const ToggleMenu = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;
