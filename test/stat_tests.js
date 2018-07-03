var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    assert = require("assert"),
    api = supertest('http://localhost:3005');

describe('Stat', function () {

    it('should return a 200 response (CCBySpeciesFAT)', function (done) {
        api.get('/api/stat/CCBySpeciesFAT/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('should return a 200 response (CCByPlacesFAT)', function (done) {
        api.get('/api/stat/CCByPlacesFAT/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('should return a 200 response (CCByPlacesAndSpeciesFAT)', function (done) {
        api.get('/api/stat/CCByPlacesAndSpeciesFAT/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    
});