# Khushboo Kumari - Data Science Portfolio

A modern, stylish, dark-themed, and interactive portfolio website to showcase my data science skills, projects, and professional journey.

## Features

- Responsive design with dark mode and glassmorphism/neumorphism styling
- Interactive UI with smooth animations and micro-interactions
- Skills showcase organized by categories with custom icons
- Project gallery with detailed descriptions, tech stacks, and live links
- Certifications section with badges and verification links
- Interactive data visualizations showcasing data science expertise
- Contact section with form integration (EmailJS) and social links
- Downloadable resume with timeline view

## Technologies Used

- React.js for component-based UI development
- Tailwind CSS for styling with custom design system
- Framer Motion for smooth animations and transitions
- Lottie for interactive data-related animations
- Chart.js and React-Chartjs-2 for data visualizations
- EmailJS for contact form integration
- React Icons for various icon sets
- React Router for navigation

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/khushbookumari15/khushboo-portfolio.git
```

2. Install dependencies
```bash
cd Khushboo-Portfolio
npm install
```

3. Set up environment variables
```bash
# Copy the example env file
cp .env.example .env.local

# Edit the .env.local file with your EmailJS credentials
# For production deployment:
# REACT_APP_EMAILJS_SERVICE_ID=your_service_id
# REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
# REACT_APP_EMAILJS_USER_ID=your_user_id
```

4. Start the development server
```bash
npm start
```

5. Build for production
```bash
# Regular build
npm run build

# Optimized build with no source maps
npm run build:prod
```

6. Analyze bundle size (optional)
```bash
npm run analyze
```

## Deployment on Vercel

This project is configured for seamless deployment on Vercel. Follow these steps:

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one
2. Install the Vercel CLI (optional)
```bash
npm install -g vercel
```

3. Deploy directly from GitHub:
   - Connect your GitHub account to Vercel
   - Select this repository
   - Configure the project settings
   - Add your environment variables (REACT_APP_EMAILJS_PUBLIC_KEY, REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID)
   - Deploy

4. Or deploy using Vercel CLI:
```bash
# Login to Vercel
vercel login

# Deploy (from project directory)
vercel
```

5. For production deployment:
```bash
vercel --prod
```

## Project Structure

```
Khushboo-Portfolio/
├── public/
│   ├── avatar.png                  # 3D avatar image
│   ├── resume.pdf                  # Your downloadable resume
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── assets/                     # Images, icons, and other static files
│   ├── components/                 # Reusable components
│   ├── data/                       # Data files for projects, skills, etc.
│   ├── pages/                      # Page components
│   ├── App.jsx                     # Main app component
│   ├── index.js                    # Entry point
│   └── styles/                     # CSS and Tailwind config
│
└── ...
```

## Customization

Update the data files in `src/data/` to personalize the portfolio with your own information.

## License

MIT
