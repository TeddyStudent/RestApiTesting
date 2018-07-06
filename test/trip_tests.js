var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    assert = require("assert"),
    api = supertest('http://localhost:3005');

var newtripid;

describe('Trip', function () {

    it('should be an object with keys and values', function (done) {
        api.get('/api/trip/1')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(res.body[0]).to.have.property("idreissu");
                expect(res.body[0].idreissu).to.not.equal(null);
                expect(res.body[0]).to.have.property("pvm");
                expect(res.body[0].pvm).to.not.equal(null);
                expect(res.body[0]).to.have.property("paikka");
                expect(res.body[0].paikka).to.not.equal(null);
                expect(res.body[0]).to.have.property("saa");
                expect(res.body[0].saa).to.not.equal(null);
                expect(res.body[0]).to.have.property("t_nopeus");
                expect(res.body[0].t_nopeus).to.not.equal(null);
                expect(res.body[0]).to.have.property("t_suunta");
                expect(res.body[0].t_suunta).to.not.equal(null);
                expect(res.body[0]).to.have.property("l_ilma");
                expect(res.body[0].l_ilma).to.not.equal(null);
                expect(res.body[0]).to.have.property("l_vesi");
                expect(res.body[0].l_vesi).to.not.equal(null);
                expect(res.body[0]).to.have.property("tili_idtili");
                expect(res.body[0].tili_idtili).to.not.equal(null);
                done();
            });
    });
    
    it('should be successful trip creation with 201 response', function (done) {
        api.post('/api/trip')
            .set('Accept', 'application/json')
            .send({
                pvm: "2018-07-06",
                paikka: "Pyhäjärvi",
                saa: "pilvinen",
                t_nopeus: "1",
                t_suunta: "kaakko",
                l_ilma: "22",
                l_vesi: "18",
                tili_idtili: "1"
            })
            .expect(201)
            .end(function (err, res) {
                expect(res.body[0]).to.have.property("idreissu");
                expect(res.body[0].idreissu).to.not.equal(null);
                newtripid = res.body[0].idreissu;
                expect(res.body[0]).to.have.property("pvm");
                expect(res.body[0].pvm).to.not.equal(null);
                expect(res.body[0]).to.have.property("paikka");
                expect(res.body[0].paikka).to.not.equal(null);
                expect(res.body[0]).to.have.property("saa");
                expect(res.body[0].saa).to.not.equal(null);
                expect(res.body[0]).to.have.property("t_nopeus");
                expect(res.body[0].t_nopeus).to.not.equal(null);
                expect(res.body[0]).to.have.property("t_suunta");
                expect(res.body[0].t_suunta).to.not.equal(null);
                expect(res.body[0]).to.have.property("l_ilma");
                expect(res.body[0].l_ilma).to.not.equal(null);
                expect(res.body[0]).to.have.property("l_vesi");
                expect(res.body[0].l_vesi).to.not.equal(null);
                expect(res.body[0]).to.have.property("tili_idtili");
                expect(res.body[0].tili_idtili).to.not.equal(null);
                done();
            });
    });
    
    it('should be updated with a new wind speed (t_nopeus)', function (done) {
        api.put('/api/trip/' + newtripid)
            .set('Accept', 'application/json')
            .send({
                pvm: "2018-07-06",
                paikka: "Pyhäjärvi",
                saa: "pilvinen",
                t_nopeus: "2",
                t_suunta: "kaakko",
                l_ilma: "22",
                l_vesi: "18",
                tili_idtili: "1"
            })
            .expect(200)
            .end(function (err, res) {
                expect(res.body[0]).to.have.property("idreissu");
                expect(res.body[0].idreissu).to.not.equal(null);
                expect(res.body[0]).to.have.property("pvm");
                expect(res.body[0].pvm).to.not.equal(null);
                expect(res.body[0]).to.have.property("paikka");
                expect(res.body[0].paikka).to.not.equal(null);
                expect(res.body[0]).to.have.property("saa");
                expect(res.body[0].saa).to.not.equal(null);
                expect(res.body[0]).to.have.property("t_nopeus");
                expect(res.body[0].t_nopeus).to.equal(2);
                expect(res.body[0]).to.have.property("t_suunta");
                expect(res.body[0].t_suunta).to.not.equal(null);
                expect(res.body[0]).to.have.property("l_ilma");
                expect(res.body[0].l_ilma).to.not.equal(null);
                expect(res.body[0]).to.have.property("l_vesi");
                expect(res.body[0].l_vesi).to.not.equal(null);
                expect(res.body[0]).to.have.property("tili_idtili");
                expect(res.body[0].tili_idtili).to.not.equal(null);
                done();
            });
    });   
    
    it('should be failed modification with 400 response', function (done) {
        api.put('/api/trip/' + newtripid)
            .set('Accept', 'application/json')
            .send({
                pvm: "2018-07-06",
                paikka: "toolongplacenametoolongplacenametoolongplacename",
                saa: "pilvinen",
                t_nopeus: "2",
                t_suunta: "kaakko",
                l_ilma: "22",
                l_vesi: "18",
                tili_idtili: "1"
            })
            .expect(400,done);
    }); 

    it('should be successful trip deletion with 200 response', function (done) {
        api.delete('/api/trip/' + newtripid)
            .set('Accept', 'application/json')
            .expect(200,done);
    });

});