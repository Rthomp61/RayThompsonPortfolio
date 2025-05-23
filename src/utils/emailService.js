import { Platform } from 'react-native';

// EmailJS configuration - replace with your actual service details
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID || 'your_user_id';

export const sendEmail = async (formData) => {
  if (Platform.OS === 'web') {
    // Use EmailJS for web platform
    try {
      // Load EmailJS if not already loaded
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        document.head.appendChild(script);
        
        await new Promise((resolve) => {
          script.onload = resolve;
        });
        
        window.emailjs.init(EMAILJS_USER_ID);
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact',
        message: formData.message,
        to_email: 'ray.thompson@pursuit.org',
      };

      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw new Error('Failed to send email via EmailJS');
    }
  } else {
    // For mobile platforms, use a fallback API or service
    try {
      const response = await fetch('https://formspree.io/f/ray.thompson@pursuit.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Formspree Error:', error);
      
      // Final fallback - construct mailto URL
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:ray.thompson@pursuit.org?subject=${subject}&body=${body}`;
      
      if (Platform.OS === 'web') {
        window.open(mailtoUrl);
      } else {
        const { Linking } = require('react-native');
        await Linking.openURL(mailtoUrl);
      }
      
      return { success: true, method: 'mailto' };
    }
  }
};

// Alternative email service using a simple HTTP endpoint
export const sendEmailViaAPI = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('API Email Error:', error);
    throw error;
  }
};
