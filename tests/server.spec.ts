// Import the dependencies for testing
import 'mocha'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../src/server'

// Configure chai
chai.use(chaiHttp)
chai.should()

// Import the data
import data from '../src/util/mobiles.json'

describe('API: phones', () => {

  describe('GET /', () => {

    // Test to get the first 5 phones
    it('should return the first 5 phones', (done) => {
      // Generate the expected result
      const expectedResult = Array.from(data).splice(0, 5)
      chai.request(app)
          .get('/api/phones')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            expect(res.body.code).to.equal(0)
            expect(res.body.success).to.equal(true)
            expect(res.body.mobiles.length).to.equal(5)
            expect(res.body.mobiles).to.eql(expectedResult)
            done()
          })
    })

    // Test to get single phone
    it('should get a single phone', (done) => {
      // Generate the expected result
      const expectedResult = Array.from(data).splice(0, 1)
      chai.request(app)
          .get('/api/phones?limit=1')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            expect(res.body.code).to.equal(0)
            expect(res.body.success).to.equal(true)
            expect(res.body.mobiles.length).to.equal(1)
            expect(res.body.mobiles).to.eql(expectedResult)
            done()
          })
    })

    // Test to get single phone
    it('should not get a single student record', (done) => {
      // Generate the expected result
      const expectedResult = Array.from(data).splice(1000, 1)
      chai.request(app)
          .get('/api/phones?offset=1000&limit=1')
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            expect(res.body.code).to.equal(0)
            expect(res.body.success).to.equal(true)
            expect(res.body.mobiles.length).to.equal(0)
            expect(res.body.mobiles).to.eql(expectedResult)
            done()
          })
    })

    // Test to get 404 response
    it('should return 404 response if request index API URI /', (done) => {
      chai.request(app)
          .get('/')
          .end((err, res) => {
            res.should.have.status(404)
            done()
          })
    })
  })
})