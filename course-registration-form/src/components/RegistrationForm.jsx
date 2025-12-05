import React, { useState } from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Age validation
    if (!age.trim()) {
      newErrors.age = 'Age is required';
    } else {
      const ageNum = parseInt(age, 10);
      if (isNaN(ageNum) || ageNum < 18) {
        newErrors.age = 'Age must be 18 or older';
      }
    }

    // Course selection validation
    if (!course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    
    if (validateForm()) {
      setIsSubmitted(true);
      // Clear form
      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
      setCourse('');
      setErrors({});
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Course Registration</h2>
        
        <div className="form-group">
          <label htmlFor="firstName">
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={errors.firstName ? 'input-error' : ''}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <span className="error-message">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={errors.lastName ? 'input-error' : ''}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <span className="error-message">{errors.lastName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="age">
            Age <span className="required">*</span>
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={errors.age ? 'input-error' : ''}
            placeholder="Enter your age"
            min="18"
          />
          {errors.age && (
            <span className="error-message">{errors.age}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="course">
            Course Selection <span className="required">*</span>
          </label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className={errors.course ? 'input-error' : ''}
          >
            <option value="">Select a course</option>
            <option value="web-development">Web Development Fundamentals</option>
            <option value="data-science">Data Science & Analytics</option>
            <option value="ui-ux-design">UI/UX Design Masterclass</option>
            <option value="digital-marketing">Digital Marketing Strategy</option>
            <option value="python-programming">Python Programming Bootcamp</option>
          </select>
          {errors.course && (
            <span className="error-message">{errors.course}</span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Register for Course
        </button>

        {isSubmitted && (
          <div className="success-message">
            ✓ Registration successful! You have been registered for the course.
          </div>
        )}
      </form>
    </div>
  );
}

export default RegistrationForm;

