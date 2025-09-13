import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.scss';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';

const Login: React.FC = () => {
  const [loginId, setLoginId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginId.toLowerCase() === 'dummyuser') {
      // Create a dummy patient if one doesn't exist
      if (!localStorage.getItem('12345')) {
        localStorage.setItem('12345', JSON.stringify({ 
          id: '12345', 
          name: 'John Doe', 
          phone: '123-456-7890',
          email: 'johndoe@example.com'
        }));
      }
      localStorage.setItem('loggedInPatient', '12345');
      navigate('/dashboard');
      return;
    }

    let patientId = localStorage.getItem(loginId); // Check if it's a phone number
    if (!patientId) {
      patientId = loginId; // Assume it's a patient ID
    }

    if (localStorage.getItem(patientId)) {
      localStorage.setItem('loggedInPatient', patientId);
      navigate('/dashboard');
    } else {
      setError('Invalid Patient ID or Phone Number');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1>Patient Portal Login</h1>
        <Input
          label="Patient ID or Phone Number (or enter 'dummyuser')"
          name="loginId"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="Enter your Patient ID or Phone"
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button onClick={handleLogin}>Login</Button>
        <p className={styles.registerLink}>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
