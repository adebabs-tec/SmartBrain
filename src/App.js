import './App.css'
import Logo from './components/Logo/Logo'
import ImageLinkform from './components/ImageLinkForm/ImageLinkform'
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank'
import Particles from 'react-tsparticles'

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 5,
      },
    },
  },
}

function App() {
  return (
    <div className="App">
      <Particles params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkform />
    </div>
  )
}

export default App
