import type { Component } from "solid-js";

// defaul props
const skyTop = "#1c4299";
const skyBottom = "#ddfff4";
const sea = "#0096d4";
const wave = "#37c0e5";
const beach = "#e4af4f";
const road = "#6f9ab4";
const centerLine = "#fff";

const App: Component = () => {
  const skyTop = randomColor();
  const sea = randomColor();
  const wave = lightenColor(sea, 30);
  const beach = randomColor();
  const road = randomColor();
  const centerLine = lightenColor(road, 50);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
      <rect width="100%" height="100%" fill="#fff" />
      <defs>
        <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color={skyTop} />
          <stop offset="100%" stop-color={skyBottom} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="1000" height="500" fill="url(#grad1)" />
      <rect x="0" y="500" width="100%" height="200" fill={sea} />
      <rect x="0" y="535" width="100%" height="5" fill={wave} />
      <rect x="0" y="580" width="100%" height="5" fill={wave} />
      <rect x="0" y="635" width="100%" height="5" fill={wave} />
      <rect x="0" y="700" width="100%" height="100" fill={beach} />
      <rect x="0" y="800" width="100%" height="200" fill={road} />
      <rect x="0" y="889" width="100%" height="10" fill={centerLine} />
    </svg>
  );
};

const randomColor = () => {
  let color = Math.ceil(16777215 * Math.random()).toString(16);
  let length = color.length;
  while (length < 6) {
    color = "0" + color;
    length++;
  }
  return "#" + color;
};

const lightenColor = (col: string, amt: number) => {
  const num = parseInt(col.slice(1), 16);

  let r = num >> 16;
  let b = (num >> 8) & 0x00ff;
  let g = num & 0x0000ff;

  r = isMax(r, r, g, b) ? r : r + amt;
  g = isMax(g, r, g, b) ? g : g + amt;
  b = isMax(b, r, g, b) ? b : b + amt;

  const newColor = g | (b << 8) | (r << 16);
  return "#" + newColor.toString(16);
};

const isMax = (target: number, r: number, g: number, b: number) => {
  return target === max(r, g, b);
};

const max = (r: number, g: number, b: number) => {
  let max = r;
  if (g > max) {
    max = g;
  }
  if (b > max) {
    max = b;
  }
  return max;
};

export default App;
