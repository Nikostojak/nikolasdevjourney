'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="What's this about?"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="form-textarea"
            placeholder="Your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="success-message">
            ✅ Thank you! Your message has been sent successfully.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            ❌ Sorry, there was an error sending your message. Please try again.
          </div>
        )}
      </form>

      <style jsx>{`
        .contact-form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          color: #e2e8f0;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-input,
        .form-textarea {
          padding: 0.875rem;
          border: 2px solid #2d3748;
          border-radius: 8px;
          background-color: #2d3748;
          color: #e2e8f0;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #63b3ed;
          background-color: #374151;
          box-shadow: 0 0 0 3px rgba(99, 179, 237, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #a0aec0;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .submit-button {
          padding: 1rem 2rem;
          background-color: #63b3ed;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #4299e1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 179, 237, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          padding: 1rem;
          background-color: #065f46;
          border: 1px solid #10b981;
          border-radius: 8px;
          color: #d1fae5;
          text-align: center;
          font-weight: 500;
        }

        .error-message {
          padding: 1rem;
          background-color: #7f1d1d;
          border: 1px solid #ef4444;
          border-radius: 8px;
          color: #fecaca;
          text-align: center;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .contact-form-container {
            padding: 1rem;
          }
          
          .form-input,
          .form-textarea {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </div>
  );
}