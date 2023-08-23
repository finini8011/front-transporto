import React from 'react';

const ProgressCircular = ({ height, width, progress, bgcolor, text }) => {
  const Parentdiv = {
    height: '40px',
    width: '40px',
    backgroundColor: '#0090ff',
    borderRadius: '50%',
    marginBottom: 40,
    position: 'relative',
    overflow: 'hidden',
    margin: 'auto'
  }
  
  const Childdiv = {
    height: `${progress}%`,
    width: `${progress}%`,
    backgroundColor: 'blue',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: `rotate(${progress * 3.6}deg)`,
    transformOrigin: 'center',
    transition: 'transform 0.6s ease-in-out'
  }
  
  const progresstext = {
    color: '#e6f4ff',
    fontWeight: 500,
    fontSize: '0.7rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
  
  return (
    <div>
      <div style={Parentdiv}>
        <div style={Childdiv}></div>
        <span style={progresstext}>
        {progress}
        </span>
      </div>
    </div>
  );
};

export default ProgressCircular;


