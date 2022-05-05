import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import { useState } from "react"

function App() {
  const [theme, setTheme] = useState("")
  const [light, setLight] = useState(false)
  return (
    <>
      <Router>
        <Header theme={theme} light={light} />
        <Routes>
          <Route
            path="/"
            element={
              <Home theme={theme} setTheme={setTheme} setLight={setLight} />
            }
          />
          <Route path="/about" element={<About theme={theme} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
