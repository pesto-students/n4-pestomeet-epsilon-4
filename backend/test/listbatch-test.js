import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp);

var host = "https://pestomeet-backend.herokuapp.com"
let should = chai.should();


describe('List Batch Route Testing', function() {
    it('should list batch by its type', function(done) {
        let type = "ninja"
        let regex=/[0-900] ninja Batches Found/
        chai.request(host).get('/api/pesto/list/batch/'+type)
            .set({"Content-Type":"application/json"})
            .set({"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJuYW1lIjoiYXB1cnZhIHdhZGVrYXIiLCJpZCI6IjA5Yjk4ZmQzLWEyOTctNDQ1OS05OThiLWJjYWY0ZjIzNzU0OSIsInJvbGUiOiJtZW50b3IiLCJ1c2VyIjp7Il9pZCI6IjYwZjZlZTA1N2E1MTQ0MDAxYzBmNjNjZSIsIm5hbWUiOiJhcHVydmEgd2FkZWthciIsImVtYWlsIjoiYXB1cnZhLncxN0BnbWFpbC5jb20iLCJwaG9uZSI6OTYwMDk5OTA5OCwicGFzc3dvcmQiOiIkMmIkMTAkcDE5SjhBeFA4VXFjeDIxVmw1bDYuT0ZJMVRtZEFrdm9KUVM3dFNSR1ZjRmNyU29IOFhRd3EiLCJyb2xlIjoibWVudG9yIiwiZXhwZXJpZW5jZSI6Im5vdF9hcHBsaWNhYmxlIiwiYXBwcm92YWwiOiJhcHByb3ZlZCIsImlkIjoiMDliOThmZDMtYTI5Ny00NDU5LTk5OGItYmNhZjRmMjM3NTQ5IiwiX192IjowfSwiaWF0IjoxNjI3MjA3MDM2fQ.sJ5OkE9AHN8r-VeG7YsfUTRj0Usmit-IZKjsPqv5QEU"})
            .end(function(err, res) {
                if(err){
                    done(err)
                }else{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').to.match(regex)
                res.body.should.have.property('result')
                res.body.should.have.property('statusCode').to.be.oneOf([true,false]);
                done();
                }
            });
        
    }).timeout(5000);
        
    });



