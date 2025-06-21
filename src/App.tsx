import './App.css'
import NoiseBackground from './components/NoiseBackground'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen w-full">
      {/* Radial Gradient Background */}
      <NoiseBackground />
      
      {/* Centered Content Area with Noise Background */}
      <div className="noise-content">
        <main className="relative z-10 min-h-screen">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}

export default App
