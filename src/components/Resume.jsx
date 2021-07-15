import React from 'react'

import './Resume.css'

function Resume(props) {
  return (
    <div className="resumeDiv">
      <iframe
        className="iframeResume"
        src="https://christelle-conrozier-cv.netlify.app/"
        frameborder="0"
        title="Christelle Conrozier CV"
      />
    </div>
  )
}
export default Resume
