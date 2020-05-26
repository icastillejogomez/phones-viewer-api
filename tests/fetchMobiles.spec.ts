import { expect } from 'chai'
import 'mocha'

// Import testing function
import fetchMobiles from '../src/util/fetchMobiles'

// Import the data
import data from '../src/util/mobiles.json'

describe('fetchMobiles', () => {

  it('should return first phone only when offset and limit are 1', async () => {
    const expectedResult = Array.from(data).splice(1, 1)
    const obtainedResult = await fetchMobiles(1, 1)
    expect(obtainedResult).to.eql(expectedResult)
  })

  it('should return two objects when call with offset=0 and limit = 2', async () => {
    const obtainedResult = await fetchMobiles(1, 2)
    expect(obtainedResult.length).to.eql(2)
  })

  it('should not return any value when call with offset = 1000 and limit = 10', async () => {
    const obtainedResult = await fetchMobiles(1000, 10)
    expect(obtainedResult.length).to.eql(0)
    expect(obtainedResult).to.eql([])
  })

})