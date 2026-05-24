import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setCookie } from '../utils/cookies';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  message?: string;
}

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [budgetError, setBudgetError] = useState('');
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const services = [
    'SaaS Explanation videos',
    'Short Form videos',
    'Long Form videos',
  ];

  const pricingOptions: Record<string, string[]> = {
    'SaaS Explanation videos': ['$500 - $1,000', '$1,000 - $2,500', '$2,500+'],
    'Short Form videos': ['$100 - $300', '$300 - $700', '$700+'],
    'Long Form videos': ['$300 - $800', '$800 - $1,500', '$1,500+'],
  };

  const onSubmit = async (data: FormData) => {
    if (!selectedService) {
      setServiceError('Please select a service');
      return;
    }

    if (!selectedBudget) {
      setBudgetError('Please select your budget');
      return;
    }

    const formData = {
      ...data,
      service: selectedService,
      budget: selectedBudget,
      page: window.location.pathname,
      source: 'website',
    };

    const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_WEBAPP_URL as string | undefined;

    if (!endpoint) {
      setSubmitError('Form endpoint is not configured.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const body = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        budget: formData.budget,
        message: formData.message || '',
        page: formData.page,
        source: formData.source,
      });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setCookie('contact_services', selectedService);
      setCookie('contact_budget', selectedBudget);
      setCookie('contact_name', data.name);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setSubmitError('Could not submit the form right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectService = (service: string) => {
    setSelectedService(service);
    setSelectedBudget('');
    setServiceError('');
    setBudgetError('');
    setIsServiceMenuOpen(false);
  };

  return (
    <div className="contact" id="contact">
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Tell Us About Your Project</h2>

              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">OK</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      {...register('name', { required: 'Name is required' })}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address',
                        },
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label id="services-label">Which Service Are You Interested In? *</label>
                    <div className="multi-select">
                      <button
                        type="button"
                        className={`multi-select-trigger ${serviceError ? 'error' : ''}`}
                        aria-labelledby="services-label"
                        aria-expanded={isServiceMenuOpen}
                        aria-haspopup="listbox"
                        aria-controls="service-menu"
                        onClick={() => setIsServiceMenuOpen((isOpen) => !isOpen)}
                      >
                        <span>{selectedService || 'Select a service'}</span>
                      </button>

                      {isServiceMenuOpen && (
                        <div id="service-menu" className="multi-select-menu" role="listbox" aria-labelledby="services-label">
                          {services.map((service) => {
                            const isSelected = selectedService === service;

                            return (
                              <button
                                key={service}
                                type="button"
                                className={`multi-select-option ${isSelected ? 'selected' : ''}`}
                                onClick={() => selectService(service)}
                                role="option"
                                aria-selected={isSelected}
                              >
                                <span>{service}</span>
                                {isSelected && <span className="option-mark">Selected</span>}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {serviceError && <span className="error-message">{serviceError}</span>}
                  </div>

                  <div className="form-group">
                    <label>Willing To Spend *</label>
                    {selectedService ? (
                      <div className="pricing-options">
                        {pricingOptions[selectedService].map((price) => (
                          <label
                            key={price}
                            className={`pricing-option ${selectedBudget === price ? 'selected' : ''}`}
                          >
                            <input
                              type="radio"
                              name="budget"
                              checked={selectedBudget === price}
                              onChange={() => {
                                setSelectedBudget(price);
                                setBudgetError('');
                              }}
                            />
                            <span>{price}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="pricing-empty">Select a service to see pricing options.</div>
                    )}
                    {budgetError && <span className="error-message">{budgetError}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Description / Comments</label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project, requirements, and any specific details..."
                      rows={6}
                      {...register('message')}
                      className={errors.message ? 'error' : ''}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitError && <span className="error-message">{submitError}</span>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
