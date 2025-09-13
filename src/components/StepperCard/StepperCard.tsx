import React, { useState } from 'react';
import styles from './StepperCard.module.scss';
import type { JourneyStep } from '../../data/mockData';

interface StepperCardProps {
  step: JourneyStep;
  isCurrent: boolean;
}

const StepperCard: React.FC<StepperCardProps> = ({ step, isCurrent }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getStatusClass = (status: JourneyStep['status']) => {
    switch (status) {
      case 'Completed':
        return styles.completed;
      case 'In Progress':
        return styles.inProgress;
      case 'Pending':
      default:
        return styles.pending;
    }
  };

  return (
    <div 
      className={`${styles.stepperCard} ${isCurrent ? styles.current : ''}`} 
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className={styles.stepHeader}>
        <div className={`${styles.statusIndicator} ${getStatusClass(step.status)}`}></div>
        <h3 className={styles.stepTitle}>{step.title}</h3>
        <span className={`${styles.stepStatus} ${getStatusClass(step.status)}`}>{step.status}</span>
      </div>
      {showDetails && (
        <div className={styles.stepDetails}>
          <p><strong>Department:</strong> {step.department}</p>
          <p><strong>Concerned Person:</strong> {step.concernedPerson}</p>
        </div>
      )}
      {step.subSteps && (
        <div className={styles.subStepsContainer}>
          {step.subSteps.map((subStep) => (
            <div key={subStep.id} className={styles.subStep}>
                <div className={`${styles.statusIndicator} ${getStatusClass(subStep.status)}`}></div>
                <p>{subStep.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StepperCard;
