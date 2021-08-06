import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
var host = "https://pestomeet-backend.herokuapp.com/";
describe('API Route Testing', function () {
    it('should send valid JWT token for authenticated user', function (done) {
        request(host).post('/api/pesto/login')
            .send({
            "email": "apurva.w17@gmail.com",
            "password": "Abc!23456"
        })
            .set({ "Content-Type": "application/json" })
            .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVzdG8tbWVldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvcGVzdG8tbWVldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUE7QUFDMUMsT0FBTyxRQUFRLE1BQU0sV0FBVyxDQUFBO0FBRWhDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFbkIsSUFBSSxJQUFJLEdBQUcsMENBQTBDLENBQUE7QUFHckQsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzFCLEVBQUUsQ0FBQyxvREFBb0QsRUFBRSxVQUFTLElBQUk7UUFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzthQUNqQyxJQUFJLENBQUM7WUFDRSxPQUFPLEVBQUMsc0JBQXNCO1lBQzlCLFVBQVUsRUFBQyxXQUFXO1NBQ3pCLENBQUM7YUFDTCxHQUFHLENBQUMsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQzthQUN4QyxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRztZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9