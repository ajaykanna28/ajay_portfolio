import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ajaykanna2528@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _template: "box",
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a problem submitting your message. Please try again.");
      setStatus('idle');
    }
  };

  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'ajaykanna2528@gmail.com',
      link: 'mailto:ajaykanna2528@gmail.com',
      color: 'var(--primary)'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 9597293244',
      link: 'tel:+919597293244',
      color: 'var(--secondary)'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Karur, Tamil Nadu, India',
      link: 'https://maps.google.com/?q=Karur,TamilNadu',
      color: 'var(--accent)'
    },
    {
      icon: <GithubIcon size={20} />,
      label: 'GitHub',
      value: 'github.com/ajaykanna28',
      link: 'https://github.com/ajaykanna28',
      color: 'var(--text-primary)'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <div className="title-bar"></div>
          <p className="section-subtitle">Have a question or want to work together? Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          {/* Contact Details Column */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Contact Information</h3>
            <p className="panel-desc">
              If you have any open roles, project collaborations, or just want to say hi, feel free to contact me via email, phone, or the contact form.
            </p>

            <div className="contact-cards">
              {contactDetails.map((detail, idx) => (
                <a 
                  key={idx}
                  href={detail.link}
                  target={detail.label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-card glass-card"
                  style={{ '--card-accent': detail.color }}
                >
                  <div className="contact-icon-wrapper" style={{ color: detail.color }}>
                    {detail.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{detail.label}</span>
                    <span className="contact-value">{detail.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-panel glass-card">
            <h3 className="panel-title">Send Message</h3>
            
            {status === 'success' ? (
              <div className="form-success-message">
                <CheckCircle size={48} className="success-icon" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out, Ajay will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Project Discussion" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="5" 
                    placeholder="Hello Ajay, I would like to discuss..." 
                    required 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn" 
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>Sending Message...</>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
