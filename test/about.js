var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3005');

describe('About', function () {

    it('should return a 200 response with "Hello World!" msg', function (done) {
        api.get('/')
            .set('Accept', 'application/json')
            .expect(200,'Hello World!', done);
    });

    it('should return a 200 response with "Fishing Diary server." msg', function (done) {
        api.get('/about')
            .set('Accept', 'application/json')
            .expect(200,'Fishing Diary server.', done);
    });

});