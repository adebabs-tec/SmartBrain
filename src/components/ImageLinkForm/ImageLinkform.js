import React from 'react'
import './ImageLinkform.css'

const ImageLinkform = () => {
  return (
    <div>
      <p className="f3">
        {'This brain magic will detect faces in your pictures. Give it a try!'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-3">
          <input type="text" className="f4 w-70 pa2 center" />
          <button className="w-30 f4 link grow ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkform
