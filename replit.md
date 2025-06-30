# Ray Thompson Portfolio App

## Overview
This is a React Native portfolio application built using Expo, showcasing Ray Thompson's AI-focused projects and professional experience. The app serves as a digital portfolio with cross-platform compatibility (iOS, Android, Web) and features two main projects: MARS (Medication Automation Reminder System) and EMS (Expense Management System).

## System Architecture

### Frontend Architecture
- **Framework**: React Native with Expo SDK 53
- **Navigation**: React Navigation v7 with Stack Navigator
- **Styling**: StyleSheet-based styling with responsive design patterns
- **Cross-platform**: Web, iOS, and Android support via Metro bundler
- **UI Components**: Custom components with Feather icons from Expo Vector Icons

### Project Structure
```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components (currently HomeScreen)
├── data/               # Static data (project information)
├── styles/             # Global styling definitions
└── utils/              # Utility functions (email service)
```

## Key Components

### Navigation & Routing
- Single-screen app with scroll-based navigation
- Stack Navigator configured without headers
- Responsive navigation menu for desktop/mobile

### UI Components
1. **Header** - Navigation bar with responsive mobile menu
2. **Hero** - Main introduction section with social links
3. **Projects** - Horizontal scrolling project showcase
4. **About** - Personal background and skills
5. **Contact** - Contact form with email integration
6. **Footer** - Site navigation and copyright

### Data Management
- Static project data stored in `projectsData.js`
- No database integration (local data only)
- Form state management using React hooks

## Data Flow

### Component Communication
- Parent-to-child props for data passing
- Event handlers passed down for navigation
- Local state management within components

### Email Integration
- EmailJS for web platform contact forms
- Formspree fallback for mobile platforms
- Environment variables for service configuration

## External Dependencies

### Core Dependencies
- **Expo SDK**: Core framework and development tools
- **React Navigation**: App navigation and routing
- **@expo/vector-icons**: Icon library (Feather icons)
- **React Native Web**: Web platform support

### Email Services
- **EmailJS**: Web-based email sending
- **Formspree**: Mobile platform email fallback
- **@sendgrid/mail**: Alternative email service (configured but not implemented)

### Development Tools
- **Babel**: Module resolution and path aliases
- **Metro**: React Native bundler with web support
- **Expo CLI**: Development and build tooling

## Deployment Strategy

### Platform Support
- **Web**: Deployable to any static hosting service
- **iOS**: Expo managed workflow or bare React Native
- **Android**: Expo managed workflow or bare React Native

### Build Configuration
- Metro bundler configured for multi-platform builds
- Babel module resolver for clean import paths
- Asset bundling for icons and images

### Environment Setup
- No database required (static content)
- Email service configuration via environment variables
- Cross-platform development via Expo CLI

## Changelog
- June 30, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.