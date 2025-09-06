# SIH Practice Repository

This repository contains practice projects and materials for Smart India Hackathon (SIH) preparation.

## Projects

### 1. Disaster Preparedness Platform
A modern web application designed to help educational institutions prepare for emergencies through interactive education and virtual drills.

The project is built with React, Vite, and Tailwind CSS, featuring a comprehensive landing page with multiple sections including hero, problem statement, solution features, stakeholder benefits, testimonials, and call-to-action sections.

#### Project Structure
```
disaster-preparedness-platform/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Images, icons, and other media
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProblemStatement.jsx
│   │   ├── SolutionFeatures.jsx
│   │   ├── StakeholderBenefits.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CallToAction.jsx
│   │   └── Footer.jsx
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── node_modules/           # Installed dependencies (not tracked by Git)
```

#### Local Development Setup

1. **Navigate to the project directory**
   ```bash
   cd disaster-preparedness-platform
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   or if using yarn:
   ```bash
   yarn install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Access the Application**
   Open your browser and navigate to `http://localhost:5173` (or the URL provided in the terminal).

## Documentation

- `landing-page-design.md` - Detailed design document for the disaster preparedness platform landing page

## Contributing

Please feel free to contribute to any of the projects in this repository as part of your SIH preparation.

## License

This repository is for educational purposes as part of SIH preparation.