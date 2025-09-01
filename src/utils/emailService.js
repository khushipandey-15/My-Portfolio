import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
// For security reasons, it's better to use environment variables
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || 'your_user_id';
emailjs.init(USER_ID);

export const sendEmail = (templateParams) => {
  // Check if we're in development mode and no EmailJS keys are set
  if (process.env.NODE_ENV === 'development' && USER_ID === 'your_user_id') {
    console.warn('Running in development mode with placeholder EmailJS credentials');
    // Simulate email sending in development
    return new Promise((resolve) => {
      console.log('Simulating email send with params:', templateParams);
      setTimeout(() => {
        resolve({ status: 200, text: 'OK' });
      }, 1000);
    });
  }
  
  // In production or if credentials are properly set
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_id',
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_id',
    templateParams,
    USER_ID
  );
};

// Instructions for deployment:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with variables {{name}}, {{email}}, {{message}}
// 4. Get your User ID, Service ID, and Template ID
// 5. Replace the placeholders in this file with your actual IDs
