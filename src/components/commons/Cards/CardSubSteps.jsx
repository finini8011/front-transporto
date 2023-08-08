import React, { useState } from 'react';

const CardSubSteps = ({ subSteps }) => {
  const [activeStep, setActiveStep] = useState(null);

  const handleClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div>
      {subSteps.map((step, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>{step.title}</button>
          {activeStep === index && step.component}
        </div>
      ))}
    </div>
  );
};

export default CardSubSteps;