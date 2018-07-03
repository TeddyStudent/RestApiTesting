var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    assert = require("assert"),
    api = supertest('http://localhost:3005');

describe('Catch', function () {

    it('should return a 200 response', function (done) {
        api.get('/api/catch/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    /*
    it('should be an object with keys and values', function (done) {
        api.get('/user/1')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.body).to.have.property("name");
                expect(res.body.name).to.not.equal(null);
                expect(res.body).to.have.property("email");
                expect(res.body.email).to.not.equal(null);
                expect(res.body).to.have.property("phoneNumber");
                expect(res.body.phoneNumber).to.not.equal(null);
                expect(res.body).to.have.property("role");
                expect(res.body.role).to.not.equal(null);
                done();
            });
    });

    it('should have a 10 digit phone number', function (done) {
        api.get('/users/1')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.body.phoneNumber.length).to.equal(10);
                done();
            });
    });

    it('should have the role of admin', function (done) {
        api.get('/users/1')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.body.role).to.equal("admin");
                done();
            });
    });

    it('should be updated with a new name', function (done) {
        api.put('/users/1')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                name: "Kevin",
                email: "kevin@example.com",
                phoneNumber: "9998887777",
                role: "editor"
            })
            .expect(200)
            .end(function (err, res) {
                expect(res.body.name).to.equal("Kevin");
                expect(res.body.email).to.equal("kevin@example.com");
                expect(res.body.phoneNumber).to.equal("9998887777");
                expect(res.body.role).to.equal("editor");
                done();
            });
    });

    it('should access their own locations', function (done) {
        api.get('/users/1/location')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                userId: 1
            })
            .expect(200)
            .end(function (err, res) {
                expect(res.body.userId).to.equal(1);
                expect(res.body.addressCity).to.equal("Portland");
                done();
            });
    });


    it('should not be able to access other users locations', function (done) {
        api.get('/users/2/location')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                userId: 1
            })
            .expect(401)
            .end(function (err, res) {
                if (err) return done(err);
                expect(res.error.text).to.equal("Unauthorized");
                done();
            });
    });
    */
});