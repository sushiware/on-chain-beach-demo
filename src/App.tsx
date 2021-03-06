import type { Component } from "solid-js";
import { createSignal } from "solid-js";

// defaul props
const sky = "#1c4299";
const horizon = "#fff";
const sea = "#0096d4";
const beach = "#e4af4f";
const road = "#6f9ab4";
const centerLine = "#fff";

const App: Component = () => {
  const [colors, setColors] = createSignal({
    sky: sky,
    sea: sea,
  });

  const click = () => setColors({ sky: randomColor(), sea: randomColor() });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      onClick={click}
    >
      <rect width="100%" height="100%" fill="#fff" />
      <defs>
        <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color={colors().sky} />
          <stop offset="100%" stop-color={horizon} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1000" height="630" fill="url(#grad1)" />
      <rect x="0" y="630" width="100%" height="100" fill={colors().sea} />
      <rect x="0" y="700" width="100%" height="200" fill={beach} />
      <rect x="0" y="800" width="100%" height="300" fill={road} />
      <rect x="0" y="889" width="100%" height="10" fill={centerLine} />
    </svg>
  );
};

const randomColor = () => {
  return (
    "#" +
    Math.ceil(0xffffff * Math.random())
      .toString(16)
      .padStart(6, "0")
  );
};

export default App;
