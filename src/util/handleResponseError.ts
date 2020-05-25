// Import types from Express
import { Response } from 'express'

export default function (res: Response, httpResponseCode: number, code: number, message: string): void {
  res
    .status(httpResponseCode)
    .json({
      code, // Can be undefined if error.code is not defined
      error: message,
      success: false,
    })
}