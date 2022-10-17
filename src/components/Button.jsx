import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
  return <Container>{title && <span>{title}</span>}</Container>;
};

export default Button;

const Container = styled.button`
  height: 4rem;
  padding: 0 3rem;
  border: none;
  outline: none;
  border-radius: 1rem;
  text-transform: capitalize;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  background: rgb(46, 39, 177);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
