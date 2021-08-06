import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp);

var host = "https://pestomeet-backend.herokuapp.com"
let should = chai.should();


describe('Create batch Route Testing', function() {
    it('should send Success message for batch creation', function(done) {
        chai.request(host).post('/api/pesto/create/batch')
            .send({
                "batchMembers":[{
                  "name":"dinesh anbumani",
                  "email":"dinesh2014@gmail.com",
                  "phone":9600999098,
                  "role":"student",   
                  "experience":"10",
                  "approval":"inprogress"
                }],
                "batchName":"ninja-04",
                "batchType":"ninja",
                "batchOwner":"apurva wadekar",
                "batchOwnerID":"09b98fd3-a297-4459-998b-bcaf4f237549"
                })
            .set({"Content-Type":"application/json"})
            .set({"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJuYW1lIjoiYXB1cnZhIHdhZGVrYXIiLCJpZCI6IjA5Yjk4ZmQzLWEyOTctNDQ1OS05OThiLWJjYWY0ZjIzNzU0OSIsInJvbGUiOiJtZW50b3IiLCJ1c2VyIjp7Il9pZCI6IjYwZjZlZTA1N2E1MTQ0MDAxYzBmNjNjZSIsIm5hbWUiOiJhcHVydmEgd2FkZWthciIsImVtYWlsIjoiYXB1cnZhLncxN0BnbWFpbC5jb20iLCJwaG9uZSI6OTYwMDk5OTA5OCwicGFzc3dvcmQiOiIkMmIkMTAkcDE5SjhBeFA4VXFjeDIxVmw1bDYuT0ZJMVRtZEFrdm9KUVM3dFNSR1ZjRmNyU29IOFhRd3EiLCJyb2xlIjoibWVudG9yIiwiZXhwZXJpZW5jZSI6Im5vdF9hcHBsaWNhYmxlIiwiYXBwcm92YWwiOiJhcHByb3ZlZCIsImlkIjoiMDliOThmZDMtYTI5Ny00NDU5LTk5OGItYmNhZjRmMjM3NTQ5IiwiX192IjowfSwiaWF0IjoxNjI3MjA3MDM2fQ.sJ5OkE9AHN8r-VeG7YsfUTRj0Usmit-IZKjsPqv5QEU"})
            .end(function(err, res) {
                if(err){
                    done(err)
                }else{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').to.be.oneOf(["Batch Created Successfully","Batch name is already taken"])
                res.body.should.have.property('result')
                res.body.should.have.property('statusCode').to.be.oneOf([true,false]);
                done();
                }
            });
        
    }).timeout(5000);
        
    });



