// Import external modules
import express from 'express'

// Import v1 API
import v1 from './v1'

// Create an express app
const app: express.Application = express()

// Mapping /api prefix with v1 API
app.use('/api', v1)

export default function run() {

  // Maybe call some config function that set sentry and others integrations??
  // Do some stuff

  // Run express
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server listening on port ${process.env.PORT || 8080}`)
  })
}