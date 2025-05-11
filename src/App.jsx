import About from "./pages/About"
import Analysis from "./pages/Analysis"
import Experience from "./pages/Experience"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import ContactsBox from "./components/ContactsBox"
import VerticalMail from "./components/VerticalMail"
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Analysis/>
      <Contact>
        {/* <ContactsBox/> */}
      </Contact>
      <Footer/>
      <VerticalMail/>
    </div>
  )
}

export default App
