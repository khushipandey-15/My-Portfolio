# Setting Up EmailJS for Your Portfolio

Follow these steps to set up EmailJS and get your contact form working with real emails:

## Step 1: Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Set Up an Email Service
1. In your EmailJS dashboard, go to "Email Services" 
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Give your service a name
6. Note down the **Service ID**

## Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (recipient)
4. Save the template
5. Note down the **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Environment Variables
1. Open your `.env` file
2. Replace the placeholder values with your actual credentials:
   ```
   REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```
3. Do the same for `.env.production` for your production environment

## Step 6: Test Your Contact Form
1. Start your development server
2. Fill out the contact form and submit
3. Check if you receive the email

## Troubleshooting
- If emails are not being sent, check the browser console for errors
- Verify all your credentials are correct
- Make sure your email service is properly set up in EmailJS
- Check if you've reached the limits of your EmailJS plan (free plan has limited sends)

## Security Note
- Never commit your actual EmailJS credentials to version control
- Use environment variables and keep your `.env` files in `.gitignore`
