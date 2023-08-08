import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCircle } from "@fortawesome/free-solid-svg-icons";

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
      <section className='border-2 text-sm text-[#0090FF] p-4 rounded-b-xl'>
        {subSteps.map((step, index) => (
          <div className='' key={index}>
            <FontAwesomeIcon
              icon={faCircle}
              className=" w-2 h-2 mr-2 "
            />
            <button onClick={() => handleClick(index)}>
              <span className='mr-2'>{step.step}</span>
              {step.title}
            </button>
            {activeStep === index && step.component}
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardSubSteps;