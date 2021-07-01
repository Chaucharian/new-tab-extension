/* eslint-disable no-undef*/
import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import styled from 'styled-components';

const Screen = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir;
  background: #f0f0f0;
  height: 100vh;
  width: 100vw;
`;

export const Container = () => {
  const [children, setChildren] = useState([]);

  const addChild = () => {
    const newCard = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    setChildren([...children, newCard]);
  };

  return (
    <Screen>
      <Button
        onClick={addChild}
        styles={{ position: "absolute", top: "10%", left: "15%" }}
      />
      {children.map((child) => (
        <Card {...child} />
      ))}
    </Screen>
  );
};
