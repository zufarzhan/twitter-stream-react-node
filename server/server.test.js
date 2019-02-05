const request = require('supertest')
let app = require('./server').app

let server = require('./server').server

afterEach(function (done) {
  server.close()
  done()
})

describe('POST /updateSearchTerm', function () {
  let data = {
    'searchTerm': 'term'
  }
  it('Should return new serch term', function (done) {
    request(app)
      .post('/updateSearchTerm')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('{"searchTerm":"term"}')
      .end(done)
  })
})
