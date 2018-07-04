var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    assert = require("assert"),
    api = supertest('http://localhost:3005');

var newtripid;

describe('Trip', function () {

    it('should return a 200 response', function (done) {
        api.get('/api/trip/1')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    /*
    it('should be successful user creation with 201 response', function (done) {
        api.post('/api/trip')
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
                newtripid = res.body[0].idtili;
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

    it('should be updated with a new wind speed (t_nopeus)', function (done) {
        api.put('/api/trip/' + newtripid)
            .set('Accept', 'application/json')
            .send({
                etunimi: "User11",
                sukunimi: "Surname1",
                kayttajatunnus: "user1id",
                salasana: "user1pwd"
            })
            .expect(200,'[{"idtili":2,"etunimi":"User11","sukunimi":"Surname1","kayttajatunnus":"user1id","salasana":"user1pwd"}]',done);
    });    

    it('should be successful trip deletion with 200 response', function (done) {
        api.delete('/api/trip/' + newtripid)
            .set('Accept', 'application/json')
            .expect(200,done);
    });
    */
});