import About from "./components/AboutMe/About"
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"


function App() {
  return (
      <div className="bg-slate-100">
        <Home/>
        <About/>
        <Projects/>
      </div>
  )
}

export default App
