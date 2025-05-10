import About from "./pages/About"
import Analysis from "./pages/Analysis"
import Experience from "./pages/Experience"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import "./app.scss";
import Nav from "./components/Nav"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Analysis/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
