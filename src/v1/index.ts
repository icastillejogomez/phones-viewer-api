// Import external modules
import express, { IRouter } from 'express'

// Import the routes
import phones from './routes/phones'

// Create new Express Router
const router: IRouter = express.Router()

// Pass the router to the phones endpoint
phones(router)

// Export the express router
export default router
