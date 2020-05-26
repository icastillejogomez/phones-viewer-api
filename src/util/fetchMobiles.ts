// Import types
import { Phone } from '../types'

// Import the data
import data from './mobiles.json'

export default function (offset: number = 0, limit: number = 5): Promise<Phone[]> {

  // Creating new array data because we need to use splice
  const mobiles = Array.from(data)

  return Promise.resolve(mobiles.splice(offset, limit))
}