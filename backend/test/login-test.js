import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp);

var host = "https://pestomeet-backend.herokuapp.com"
let should = chai.should();


describe('Login Route Testing', function() {
    it('should send Login Success message', function(done) {
        chai.request(host).post('/api/pesto/login')
            .send({
                    "email":'apurva.w17@gmail.com',
                    "password":'Abc!23456'
                })
            .set({"Content-Type":"application/json"})
            .end(function(err, res) {
                if(err){
                    done(err)
                }else{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("Login Success");
                res.body.should.have.property('result').be.a('string');
                res.body.should.have.property('statusCode').eql(true);
                done();
                }
            });
        }).timeout(5000);;
        
    it('should send wrong username/password error', function(done) {
        chai.request(host).post('/api/pesto/login')
            .send({
                    "email":'apurva.w17@gmail.com',
                    "password":'Abc!'
                })
            .set({"Content-Type":"application/json"})
            .end(function(err, res) {
                if(err){
                    done(err)
                }else{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql("Wrong Username/Password");
                res.body.should.have.property('result');
                res.body.should.have.property('statusCode').eql(false);
                done();
                }
            });
        
    }).timeout(5000);
});


