import chai from "chai";
import chaiHttp from "chai-http";
import server from "./index";

chai.use(chaiHttp);
chai.should();

describe("Koa Server", () => {
  describe("GET /", () => {
    it(`should print "Hello World"`, (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.equal("Hello World");
          done();
        });
    });
  });
});
