var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    assert = require("assert"),
    api = supertest('http://localhost:3005');

var newcatchid;

describe('Catch', function () {

    it('should return a 200 response', function (done) {
        api.get('/api/catch/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    // case for creation 201
    // case for modification 200
    // case for modification validaton fails 400
    // case for deletion 200

});