import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faArrowDown, faCircle } from "@fortawesome/free-solid-svg-icons";

const CardSubSteps = ({ subSteps, title }) => {
  const [activeStep, setActiveStep] = useState(null);

  const handleClick = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  return (
    <div className="w-full">
      <section className='bg-[#EEF2F6] p-4 text-[#0090FF] rounded-t-2xl font-medium w-full'>
        {title}
      </section>
      <section className='border-2 text-sm  p-4 rounded-b-xl'>
        {subSteps.map((step, index) => (
          <div className='pb-2 align-center' key={index}>
            {activeStep === index && (
              <>
                <FontAwesomeIcon
                  icon={faCircle}
                  className={`w-2 h-2 mr-2 text-[#0090FF] ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}
                />
                <button onClick={() => handleClick(index)}>
                  <span className={`mr-2 text-[#0090FF] ${activeStep === index ? 'font-bold' : ''}`}>{step.step}</span>
                  <span className={`mr-2 text-[#0090FF] ${activeStep === index ? 'font-bold' : ''}`}>{step.title}</span>
                </button>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={`w-2 h-2 mr-2 text-[#0090FF] ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}
                />
                {step.component}
                {/* {React.createElement(step.component)} */}
              </>
            )}
            {activeStep === null && (
              <button onClick={() => handleClick(index)}>
                <FontAwesomeIcon
                  icon={faCircle}
                  className={`w-2 h-2 mr-2 text-[#0090FF] ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}
                />
                <span className={`mr-2 text-[#0090FF] ${activeStep === index ? 'font-bold' : ''}`}>{step.step}</span>
                <span className={`mr-2 text-[#0090FF] ${activeStep === index ? 'font-bold' : ''}`}>{step.title}</span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={`w-2 h-2 mr-2 text-[#0090FF] ${activeStep === index ? 'opacity-100' : 'opacity-50'}`}
                />
              </button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardSubSteps;