var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    assert = require("assert"),
    api = supertest('http://localhost:3005');

var newcatchid;

describe('Catch', function () {

    it('should be an object with keys and values', function (done) {
        api.get('/api/catch/1')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.body[0]).to.have.property("idkalat");
                expect(res.body[0].idkalat).to.not.equal(null);
                expect(res.body[0]).to.have.property("laji");
                expect(res.body[0].laji).to.not.equal(null);
                expect(res.body[0]).to.have.property("paino");
                expect(res.body[0].paino).to.not.equal(null);
                expect(res.body[0]).to.have.property("pituus");
                expect(res.body[0].pituus).to.not.equal(null);
                expect(res.body[0]).to.have.property("pyyntitapa");
                expect(res.body[0].pyyntitapa).to.not.equal(null);
                expect(res.body[0]).to.have.property("viehe");
                expect(res.body[0].viehe).to.not.equal(null);
                expect(res.body[0]).to.have.property("viehe_vari");
                expect(res.body[0].viehe_vari).to.not.equal(null);
                expect(res.body[0]).to.have.property("saantiaika");
                expect(res.body[0].saantiaika).to.not.equal(null);
                expect(res.body[0]).to.have.property("reissu_idreissu");
                expect(res.body[0].reissu_idreissu).to.not.equal(null);
                expect(res.body[0]).to.have.property("reissu_tili_idtili");
                expect(res.body[0].reissu_tili_idtili).to.not.equal(null);
                done();
            });
    });

    it('should be successful catch creation with 201 response', function (done) {
        api.post('/api/catch')
            .set('Accept', 'application/json')
            .send({
                laji: "Hauki",
                paino: "10040",
                pituus: "128",
                pyyntitapa: "uistelu",
                viehe: "Turus-ukko",
                viehe_vari: "Punakelta",
                saantiaika: "17:45:07",
                reissu_idreissu: "1",
                reissu_tili_idtili: "1"
            })
            .expect(201)
            .end(function (err, res) {
                expect(res.body[0]).to.have.property("idkalat");
                expect(res.body[0].idkalat).to.not.equal(null);
                newcatchid = res.body[0].idkalat;
                expect(res.body[0]).to.have.property("laji");
                expect(res.body[0].laji).to.not.equal(null);
                expect(res.body[0]).to.have.property("paino");
                expect(res.body[0].paino).to.not.equal(null);
                expect(res.body[0]).to.have.property("pituus");
                expect(res.body[0].pituus).to.not.equal(null);
                expect(res.body[0]).to.have.property("pyyntitapa");
                expect(res.body[0].pyyntitapa).to.not.equal(null);
                expect(res.body[0]).to.have.property("viehe");
                expect(res.body[0].viehe).to.not.equal(null);
                expect(res.body[0]).to.have.property("viehe_vari");
                expect(res.body[0].viehe_vari).to.not.equal(null);
                expect(res.body[0]).to.have.property("saantiaika");
                expect(res.body[0].saantiaika).to.not.equal(null);
                expect(res.body[0]).to.have.property("reissu_idreissu");
                expect(res.body[0].reissu_idreissu).to.not.equal(null);
                expect(res.body[0]).to.have.property("reissu_tili_idtili");
                expect(res.body[0].reissu_tili_idtili).to.not.equal(null);
                done();
            });
    });

    it('should be successful modification of pyyntitapa with 200 response', function (done) {
        api.put('/api/catch/' + newcatchid)
            .set('Accept', 'application/json')
            .send({
                laji: "Hauki",
                paino: "10040",
                pituus: "128",
                pyyntitapa: "heitto",
                viehe: "Turus-ukko",
                viehe_vari: "Punakelta",
                saantiaika: "17:45:07",
                reissu_idreissu: "1",
                reissu_tili_idtili: "1"
            })
            .expect(200)
            .end(function (err, res) {
                expect(res.body[0]).to.have.property("idkalat");
                expect(res.body[0].idkalat).to.not.equal(null);
                expect(res.body[0]).to.have.property("laji");
                expect(res.body[0].laji).to.not.equal(null);
                expect(res.body[0]).to.have.property("paino");
                expect(res.body[0].paino).to.not.equal(null);
                expect(res.body[0]).to.have.property("pituus");
                expect(res.body[0].pituus).to.not.equal(null);
                expect(res.body[0]).to.have.property("pyyntitapa");
                expect(res.body[0].pyyntitapa).to.equal('heitto'); //expected result of modify
                expect(res.body[0]).to.have.property("viehe");
                expect(res.body[0].viehe).to.not.equal(null);
                expect(res.body[0]).to.have.property("viehe_vari");
                expect(res.body[0].viehe_vari).to.not.equal(null);
                expect(res.body[0]).to.have.property("saantiaika");
                expect(res.body[0].saantiaika).to.not.equal(null);
                expect(res.body[0]).to.have.property("reissu_idreissu");
                expect(res.body[0].reissu_idreissu).to.not.equal(null);
                expect(res.body[0]).to.have.property("reissu_tili_idtili");
                expect(res.body[0].reissu_tili_idtili).to.not.equal(null);
                done();
            });
    });

    it('should be failed modification of pyyntitapa with 400 response', function (done) {
        api.put('/api/catch/' + newcatchid)
            .set('Accept', 'application/json')
            .send({
                laji: "Hauki",
                paino: "10040",
                pituus: "128",
                pyyntitapa: "toolongpyyntitapatoolongpyyntitapatoolongpyyntitapa",
                viehe: "Turus-ukko",
                viehe_vari: "Punakelta",
                saantiaika: "17:45:07",
                reissu_idreissu: "1",
                reissu_tili_idtili: "1"
            })
            .expect(400,done);
    });

    it('should be successful catch deletion with 200 response', function (done) {
        api.delete('/api/catch/' + newcatchid)
            .set('Accept', 'application/json')
            .expect(200,done);
    });

});