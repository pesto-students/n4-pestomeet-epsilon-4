import chai, {expect} from 'chai'
import chaiHttp from 'chai-http'
import fs from 'fs'

chai.use(chaiHttp);

var host = "https://pestomeet-backend.herokuapp.com"
let should = chai.should();


describe('Create Resource Route Testing', function() {
    it('should send Success message for Resource Upload', function(done) {
        chai.request(host).post('/api/pesto/resource/upload')
            .field({
                'resourceName': 'Masterclass-05',
                'uploaderId': 'a6c949f5-97e2-4f51-9311-53c814f659fd',
                'eventId': '1ce751aa-152d-4a1c-8401-3ef77d06c720',
                'eventType': 'SomeEventType',
            })
            .attach( 'resource',"C:/Users/91960/Downloads/yt1s.com - LANKYBOX TRADING  shorts.mp4")
            .set({"Content-Type":" multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"})
            .set({"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJuYW1lIjoiYXB1cnZhIHdhZGVrYXIiLCJpZCI6IjA5Yjk4ZmQzLWEyOTctNDQ1OS05OThiLWJjYWY0ZjIzNzU0OSIsInJvbGUiOiJtZW50b3IiLCJ1c2VyIjp7Il9pZCI6IjYwZjZlZTA1N2E1MTQ0MDAxYzBmNjNjZSIsIm5hbWUiOiJhcHVydmEgd2FkZWthciIsImVtYWlsIjoiYXB1cnZhLncxN0BnbWFpbC5jb20iLCJwaG9uZSI6OTYwMDk5OTA5OCwicGFzc3dvcmQiOiIkMmIkMTAkcDE5SjhBeFA4VXFjeDIxVmw1bDYuT0ZJMVRtZEFrdm9KUVM3dFNSR1ZjRmNyU29IOFhRd3EiLCJyb2xlIjoibWVudG9yIiwiZXhwZXJpZW5jZSI6Im5vdF9hcHBsaWNhYmxlIiwiYXBwcm92YWwiOiJhcHByb3ZlZCIsImlkIjoiMDliOThmZDMtYTI5Ny00NDU5LTk5OGItYmNhZjRmMjM3NTQ5IiwiX192IjowfSwiaWF0IjoxNjI3MjA3MDM2fQ.sJ5OkE9AHN8r-VeG7YsfUTRj0Usmit-IZKjsPqv5QEU"})
            .end(function(err, res) {
                if(err){
                    done(err)
                }else{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').to.be.oneOf(["Error Happened while uploading resources, Try Again !","Update Failed ! Please Try Again","Couldn't Find the Event","Resource Uploaded Successfully","Resource already found"])
                res.body.should.have.property('result')
                res.body.should.have.property('statusCode').to.be.oneOf([true,false]);
                done();
                }
            });
        
    }).timeout(500000);
        
    });



