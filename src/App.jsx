import Header from './components/Header'
import Home from './components/Home'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import { ThemeProvider } from './context/ThemeContext'
import './styles/theme.css'
import './styles/components.css'

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ParticlesBackground />
        <Header />
        <main>
          <Home />
          <TechStack />
          <Projects />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
