import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp);

var host = "https://pestomeet-backend.herokuapp.com"
let should = chai.should();


describe('Registration Route Testing', function() {
    it('should send Registration Success message', function(done) {
        chai.request(host).post('/api/pesto/register')
            .send({"name":"student two",
            "email":"studenttwo@student.com",
            "phone":9600999876,
            "password":"Dummy Password",
            "role":"student",
            "experience":"10",
            "approval":"In-Progress"
            })
            .set({"Content-Type":"application/json"})
            .end(function(err, res) {
                if(err){
                    done(err)
                }else{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').to.be.oneOf(["User Registered Successfully","User Already Available"])
                res.body.should.have.property('result')
                res.body.should.have.property('statusCode').to.be.oneOf([true,false]);
                done();
                }
            });
        
    }).timeout(5000);
        
    });



