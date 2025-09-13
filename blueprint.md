# Healthcare Patient Journey Portal - Blueprint

## Overview

This document outlines the plan for creating a React application for a healthcare patient journey portal. The application will be responsive, working on both web and mobile, and will be styled using SCSS modules.

## Features & Plan

### 1. **Project Setup**
- **DONE** Install `sass` for SCSS support.
- **DONE** Install `react-router-dom` for navigation.
- **DONE** Create a clear folder structure:
    - `src/pages`: For top-level page components.
    - `src/components`: For reusable UI components.
    - `src/styles`: For global styles and SCSS variables.
    - `src/hooks`: For custom hooks.
    - `src/data`: For mock data.
    - `src/assets`: For static assets like images and icons.
- **DONE** Define SCSS variables for colors, typography, and spacing in `src/styles/_variables.scss`.

### 2. **Routing**
- **DONE** Configure routes in `src/App.tsx` using `react-router-dom` for the following pages:
    - `/`: Login Page
    - `/register`: Patient Registration Page
    - `/dashboard`: Patient Dashboard

### 3. **Patient Registration Page (`/register`)**
- **DONE** Create a responsive form with fields: Name, Age, Address, Phone.
- **DONE** On submission, generate a unique patient ID.
- **DONE** Store patient data (in-memory or localStorage for this simulation).
- **DONE** Display a success message with the new Patient ID and a link to the login page.
- **DONE** Style the form using a dedicated SCSS module (`Registration.module.scss`).

### 4. **Login Page (`/`)**
- **DONE** Create a form for a patient to log in using their Patient ID.
- **DONE** On successful login, redirect the user to the Patient Dashboard.
- **DONE** Implement basic validation and error handling for invalid IDs.
- **DONE** Style the login form using `Login.module.scss`.

### 5. **Patient Dashboard (`/dashboard`)**
- **DONE** Create a protected route that only allows access if a user is "logged in".
- **DONE** Display the logged-in patient's details (Name, ID, Age).
- **DONE** Design and implement a progressive stepper/card view for the treatment journey.
    - Example Flow: Audiometry Test -> Speech Test -> Hearing Aid -> BERA -> Others.
- **DONE** Each step in the journey will be a clickable card.
- **DONE** Cards for stages with sub-steps will be expandable/collapsible.
- **DONE** Each stage will display a status: Pending, In Progress, or Completed.
- **DONE** Create a reusable `StepperCard` component.
- **DONE** Style the dashboard and cards using `Dashboard.module.scss` and `StepperCard.module.scss`, ensuring responsiveness.
- **DONE** Create mock data for the treatment journey.

### 6. **Styling and Design**
- **DONE** Use SCSS with variables for a consistent theme.
    - Primary Color: `#2E86C1`
    - Secondary Color: `#17A589`
    - Neutrals: `#F4F6F7` (background), `#222` (text)
- **DONE** Adhere to an 8px grid system for spacing and layout.
- **DONE** Ensure all components are responsive and adapt to different screen sizes.
- **DONE** Use modular SCSS for all components.

### 7. **Code Quality and Best Practices**
- **DONE** Use functional components with React Hooks.
- **DONE** Write clean, readable, and reusable code.
- **DONE** Add accessibility features where appropriate (e.g., `aria-labels`).

### **Current Task**
- **DONE** Initialize the project structure and install dependencies.
- **DONE** Create `_variables.scss` and `index.scss`.
- **DONE** Set up the basic routing in `App.tsx`.
- **DONE** Create the `Registration` page component and its styles.
- **DONE** Create the `Login` page component and its styles.
- **DONE** Create the `Dashboard` page component and its styles.
- **DONE** Create the `StepperCard` component.
- **DONE** Create mock data.
- **DONE** Implement the logic for all components.
- **Final Review**
