# Aisha Saleh Portfolio Website

A modern, elegant, and highly aesthetic portfolio website for Aisha Saleh, a female journalist based in Chad. The site is built using React (frontend), Node.js (backend), and MongoDB (database), with a feminine but professional design.

## Features

- Responsive design optimized for all devices
- Multilingual support (Arabic, French, and English)
- Content management system for articles, gallery, and profile information
- Contact form for visitor inquiries
- Modern UI with animations and transitions
- Secure authentication for admin access

## Tech Stack

### Frontend
- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- i18next for internationalization
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- Multer for file uploads
- i18next for server-side translations

## Project Structure

```
├── frontend/               # React frontend application
│   ├── public/             # Static files
│   └── src/                # Source files
│       ├── assets/         # Images and other assets
│       ├── components/     # React components
│       ├── context/        # React context providers
│       ├── hooks/          # Custom React hooks
│       ├── locales/        # Translation files
│       └── services/       # API services
│
├── backend/                # Node.js backend application
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── uploads/            # Uploaded files
│   └── utils/              # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/aisha-saleh-portfolio.git
   cd aisha-saleh-portfolio
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

4. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Frontend Deployment with Vercel

1. Create an account on [Vercel](https://vercel.com) if you don't have one.

2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

3. Navigate to the frontend directory and run:
   ```
   vercel
   ```

4. Follow the prompts to deploy your application.

5. For production deployment:
   ```
   vercel --prod
   ```

### Backend Deployment with Render

1. Create an account on [Render](https://render.com) if you don't have one.

2. Create a new Web Service and connect your GitHub repository.

3. Configure the service:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables from your `.env` file

4. Click "Create Web Service" to deploy.

### Database Deployment with MongoDB Atlas

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

2. Create a new cluster and follow the setup instructions.

3. Obtain your connection string and update your backend `.env` file.

## Alternative Backend Deployment with Railway

1. Create an account on [Railway](https://railway.app) if you don't have one.

2. Create a new project and connect your GitHub repository.

3. Add a MongoDB plugin to your project.

4. Configure environment variables from your `.env` file.

5. Deploy your application.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)
