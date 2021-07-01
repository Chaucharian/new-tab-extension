import React from "react";
import { useSpring, animated, to } from "react-spring";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";

const Container = styled.div`
  & > div {
    position: absolute;
    width: 30vw;
    height: 30vw;
    background: grey;
    border-radius: 5px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s, opacity 0.5s;
    will-change: transform;
    border: 10px solid white;
    cursor: grab;
    overflow: hidden;
    touch-action: none;
  }
`;

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

// const wheel = (y) => {
//   const imgHeight = window.innerWidth * 0.3 - 20
//   return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
// }

document.addEventListener("gesturestart", (e) => e.preventDefault());
document.addEventListener("gesturechange", (e) => e.preventDefault());

export function Card({ x: _x = 0, y: _y = 0 }) {
  const domTarget = React.useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, set] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: _x,
      y: _y,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  //   const [{ wheelY }, setWheel] = useSpring(() => ({ wheelY: 0 }))
  const [drag, setDrag] = React.useState(false);

  useGesture(
    {
      onDragStart: () => setDrag(true),
      onDrag: ({ offset: [x, y] }) =>
        set({ x, y, rotateX: 0, rotateY: 0, scale: 1 }),
      onDragEnd: () => setDrag(false),
      onPinch: ({ offset: [d, a] }) => set({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        set({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && set({ rotateX: 0, rotateY: 0, scale: 1 }),
      //   onWheel: ({ offset: [, y] }) => setWheel({ wheelY: y })
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <Container>
      <animated.div
        ref={domTarget}
        className={`${drag ? "dragging" : ""}`}
        style={{
          transform: "perspective(600px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        {/* <animated.div> */}
        {/* </animated.div> */}
      </animated.div>
    </Container>
  );
}
