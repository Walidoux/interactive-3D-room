import { Component, createSignal } from "solid-js";
import "./styles/main.scss";

const App: Component = () => {
  const [counter, setCounter] = createSignal(0);
  setInterval(setCounter, 1000, (c: number) => c + 1);

  return <h1 class="header">{counter()}</h1>;
};

export default App;
