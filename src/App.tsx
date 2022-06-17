import { Component, createSignal } from 'solid-js'

import { Scene } from './components/Scene/Scene'
import './styles/main.scss'

const App: Component = () => {
  const [counter, setCounter] = createSignal(0)
  setInterval(setCounter, 1000, (c: number) => c + 1)

  return (
    <h1 class='header'>
      {counter()}
      <Scene />
    </h1>
  )
}

export default App
