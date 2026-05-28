import { useEffect } from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const skills = [
  'Product Design', 'AI Integration', 'React', 'Design Systems',
  'Figma', 'User Research', 'Prototyping', 'Frontend Engineering',
  'Claude API', 'TypeScript', 'Interaction Design', 'Developer Tools',
]

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    reveals.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Hero />
      <Marquee skills={skills} />
      <div className="site-wrapper">
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
