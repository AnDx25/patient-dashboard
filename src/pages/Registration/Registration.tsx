import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';
import Button from '../../components/common/Button/Button';
import Input from '../../components/common/Input/Input';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    phone: '',
  });
  const [patientId, setPatientId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPatientId = `PID-${Date.now()}`;
    setPatientId(newPatientId);
    // In a real app, you would save this to a database.
    localStorage.setItem(newPatientId, JSON.stringify({ ...formData, id: newPatientId }));
    localStorage.setItem(formData.phone, newPatientId); // for login
  };

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.registrationCard}>
        <h1>Patient Registration</h1>
        {patientId ? (
          <div className={styles.successMessage}>
            <h2>Registration Successful!</h2>
            <p>Your Patient ID is: <strong>{patientId}</strong></p>
            <p>Please use this ID to log in.</p>
            <Link to="/">
              <Button onClick={() => {}}>Go to Login</Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <Input
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
            <Input
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            <Button onClick={() => {}} type="submit">Register</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registration;
