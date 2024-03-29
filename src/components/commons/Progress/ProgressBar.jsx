import React from 'react'

const ProgressBar = ({ bgcolor, progress, height, width, text }) => {

  const Parentdiv = {
    height: height,
    width: width,
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    marginBottom: 40
  }

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: 'right'
  }

  const progresstext = {
    color: '#0090ff',
    fontWeight: 500,
    fontSize:"0.7rem"

  }

  return (
    <div>
      <div style={Parentdiv}>
        <div style={Childdiv}>
        </div>
        <span style={progresstext}>
          PORCENTAJE DE CUMPLIMIENTO{` ${text} ${progress}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar;