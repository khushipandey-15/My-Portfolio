import emailjs from '@emailjs/browser';

// Properly initialize EmailJS with your Public Key (not User ID)
// For security reasons, it's better to use environment variables
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS with the public key
if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
} else {
  console.error('EmailJS Public Key is not set. Email functionality will not work.');
}

export const sendEmail = (templateParams) => {
  // Get service ID and template ID from environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  
  // Check if all required credentials are available
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.error('EmailJS credentials missing. Please set all required environment variables.');
    return Promise.reject(new Error('EmailJS configuration is incomplete. Please check your environment variables.'));
  }
  
  // Send the email using EmailJS
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams
  );
};

// Instructions for deployment:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template with variables {{from_name}}, {{from_email}}, {{message}}, {{to_name}}
// 4. Get your Public Key, Service ID, and Template ID from your EmailJS dashboard
// 5. Set these values in your .env file:
//    REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
//    REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
//    REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
