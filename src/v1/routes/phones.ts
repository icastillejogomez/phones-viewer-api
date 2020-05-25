// Import types from Express
import { IRouter, Request, Response } from 'express'

// Import fetch function
import { fetchMobiles, handleResponseError } from '../../util'
import { Phone } from '../../types'

// Declaration of the main function
export default function (router: IRouter) {

  router.get('/phones', async (req: Request, res: Response) => {
    // Get offset & limit
    let offset: string | number = <string>req.query.offset // Need to "cast" into a string
    let limit: string | number = <string>req.query.limit // Need to "cast" into a string

    // Check offset & limit are defined and have invalid values
    if (typeof offset === 'string' && isNaN(parseInt(offset, 10))) {
      return handleResponseError(res, 400, 1, 'Invalid offset value')
    }
    if (typeof limit === 'string' && isNaN(parseInt(limit, 10))) {
      return handleResponseError(res, 400, 1, 'Invalid limit value')
    }

    // Check offset & limit are defined and parse their values
    if (typeof offset === 'string') offset = parseInt(offset, 10)
    if (typeof limit === 'string') limit = parseInt(limit, 10)

    // Get the mobiles from database
    let mobiles: Phone[] = [] // Could be undefined, null, or something else
    try {
      mobiles = await fetchMobiles(offset, limit) // Simulating fetchMobile can throw an error and using async await
    } catch (error) {
      // Maybe send the error to sentry manually??
      console.error(error)
      return handleResponseError(res, error.status || 500, error.code, error.msg || error.message)
    }

    // Send the response
    res.json({
      mobiles,
      code: 0,
      success: true,
    })
  })
}