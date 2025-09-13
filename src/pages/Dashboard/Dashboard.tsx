import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import { mockJourney } from '../../data/mockData';
import type { JourneyStep } from '../../data/mockData';
import StepperCard from '../../components/StepperCard/StepperCard';
import Button from '../../components/common/Button/Button';

const Dashboard: React.FC = () => {
  const [patient, setPatient] = useState<any>(null);
  const [journey] = useState<JourneyStep[]>(mockJourney);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInPatientId = localStorage.getItem('loggedInPatient');
    if (loggedInPatientId) {
      const patientData = JSON.parse(localStorage.getItem(loggedInPatientId) || '');
      setPatient(patientData);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInPatient');
    navigate('/');
  };

  const currentStep = journey.find(step => step.status === 'In Progress') || journey.find(step => step.status === 'Pending');

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <div className={styles.branding}>AUDICARE</div>
        <div className={styles.userInfo}>
          <span>Welcome, {patient.name}</span>
          <Button onClick={handleLogout} variant="secondary">Logout</Button>
        </div>
      </header>
      
      <main className={styles.mainContent}>
        <h1>Your Treatment Journey</h1>
        <p>Follow your personalized treatment plan step by step.</p>

        <div className={styles.journeyStepper}>
          {journey.map((step) => (
            <StepperCard key={step.id} step={step} isCurrent={currentStep?.id === step.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
