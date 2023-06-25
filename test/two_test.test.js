const chai = require('chai');
const chaiHttp = require('chai-http');
const  expect = require('chai').expect
chai.use(chaiHttp);


const  url = 'http://localhost:3000';


describe('inserte  el  nombre  y  el  precio',() => {

    it("esperamos  un  name y  un  price",(done) => {

        chai.request(url)
        .post('/api/v1/products')
        .send({
            name: "acer",
            price: 2500
        })

        .end((err, res) => {
            console.log(res.body);
            expect(res).to.have.status(200);
            done();
        })

    })

});

















// const  app = require('../index').app

// describe('Suite  configuration  endpoint raiz', () => {
//     it('esperamos  un  hola', (done) => {

//         chai.request("http://localhost:3000")
//              .get('/')
//              .end((err, res) =>{
//                 console.log("A")
//                 chai.assert.equal(res.text, "hola");
//                 done();
//              })
//              console.log("B")

//     })
// })