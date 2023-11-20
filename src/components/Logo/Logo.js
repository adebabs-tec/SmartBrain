import React from 'react'
import { Tilt } from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      {' '}
      <Tilt
        options={{ max: '55' }}
        className="Tilt br-2 shadow-2"
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img
            src={brain}
            style={{ paddingTop: '5px', width: '100%', height: '100%' }}
            alt="brain"
          />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
