// Import necessary modules
import express from 'express';
import cors from 'cors';

// Import routes and server configuration
import routes from './routes/routes.js';
import { serverConfig } from './config.js';

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Use '/api' routes
app.use('/api', routes);

// Start server on specified port
app.listen(serverConfig.port, () =>
  console.log(`Server running on port ${serverConfig.port}`),
);
