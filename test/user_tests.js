var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    assert = require("assert"),
    api = supertest('http://localhost:3005');

var newuserid;

describe('User', function () {

    it('should be an object with keys and values', function (done) {
        api.get('/api/user/1')
            .set('Accept', 'application/json')
            .expect(200,'[{"idtili":1,"etunimi":"Teddy","sukunimi":"Student","kayttajatunnus":"TeddyStudent","salasana":"teddypwd"}]', done)
            //.expect(200,done);
    });

    it('should be unknown user with 404 response', function (done) {
        api.get('/api/user/11')
            .set('Accept', 'application/json')
            .expect(404,done);
    });

    it('should be updated with a new first name', function (done) {
        api.put('/api/user/2')
            .set('Accept', 'application/json')
            .send({
                etunimi: "User11",
                sukunimi: "Surname1",
                kayttajatunnus: "user1id",
                salasana: "user1pwd"
            })
            .expect(200,'[{"idtili":2,"etunimi":"User11","sukunimi":"Surname1","kayttajatunnus":"user1id","salasana":"user1pwd"}]',done);
    });

    it('should be successful login', function (done) {
        api.post('/api/user/login')
            .set('Accept', 'application/json')
            .send({
                kayttajatunnus: "user1id",
                salasana: "user1pwd"
            })
            .expect(200,done);
    });

    
    it('should be failed login', function (done) {
        api.post('/api/user/login')
            .set('Accept', 'application/json')
            .send({
                kayttajatunnus: "user1id",
                salasana: "qwerty"
            })
            .expect(401,done);
    });

    it('should be failed user creation with 400 response', function (done) {
        api.post('/api/user')
            .set('Accept', 'application/json')
            .send({
                etunimi: "USER123",
                sukunimi: "TOOLONGSURNAMETOOLONGSURNAMETOOLONGSURNAMETOOLONGSURNAME",
                kayttajatunnus: "TEST123ID",
                salasana: "TEST123PWD"
            })
            .expect(400,done);
    });

    
    it('should be successful user creation with 201 response', function (done) {
        api.post('/api/user')
            .set('Accept', 'application/json')
            .send({
                etunimi: "USER123",
                sukunimi: "TEST123",
                kayttajatunnus: "TEST123ID",
                salasana: "TEST123PWD"
            })
            //.expect(201,done);
            .expect(201)
            .end(function (err, res) {
                expect(res.body[0]).to.have.property("idtili");
                expect(res.body[0].idtili).to.not.equal(null);
                newuserid = res.body[0].idtili;
                expect(res.body[0]).to.have.property("etunimi");
                expect(res.body[0].etunimi).to.not.equal(null);
                expect(res.body[0]).to.have.property("sukunimi");
                expect(res.body[0].sukunimi).to.not.equal(null);
                expect(res.body[0]).to.have.property("kayttajatunnus");
                expect(res.body[0].kayttajatunnus).to.not.equal(null);
                expect(res.body[0]).to.have.property("salasana");
                expect(res.body[0].salasana).to.not.equal(null);
                done();
            });
    });
    

    it('should be successful user deletion with 200 response', function (done) {
        api.delete('/api/user/' + newuserid)
            .set('Accept', 'application/json')
            .expect(200,done);
    });
    

});