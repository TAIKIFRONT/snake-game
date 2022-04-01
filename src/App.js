import React from "react"
import Navigation from "./components/Navigation"
import Field from "./components/Field"
import Button from "./components/Button"
import ManipulationPanel from "./components/ManipulationPanel"
import Rules from "./components/Rules"
import useSnakeGame from "./hooks/useSnakeGame"

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"

function App() {
  const {
    body,
    difficulty,
    fields,
    start,
    stop,
    reload,
    status,
    updateDirection,
    updateDifficulty,
  } = useSnakeGame()
  return (
    <div className="App">
      <header className="header">
        <div className="title-container">
          <h1 className="title">Snake Game</h1>
        </div>
        <Navigation
          length={body.length}
          difficulty={difficulty}
          onChangeDifficulty={updateDifficulty}
        />
      </header>
      <main className="main">
        <Field fields={fields} />
      </main>
      <footer className="footer">
        <Button
          status={status}
          onStop={stop}
          onStart={start}
          onRestart={reload}
        />
        <ManipulationPanel onChange={updateDirection} />
      </footer>
      <BrowserRouter>
        <NavLink to="/rules">ルール説明</NavLink>
        <Rules />
      </BrowserRouter>
    </div>
  )
}

export default App
