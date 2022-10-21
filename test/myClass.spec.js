var MyClass = require('../src/myClass');
var sinon = require('sinon');
var myObj = new MyClass();
var chai =require('chai');
var expect = require('chai').expect;
const nock = require('nock');
const chaiAsPromise = require('chai-as-promised');
chai.use(chaiAsPromise);

var tVar = {
    name:"abc",
    age:27
}

describe('Test suite', () => { 

    after(function(){
        console.log("------------------------after the test suite")
    })
    before(function(){
        console.log("-------------------------before the test suit")
    })
    afterEach(function(){
        console.log("------------------------afterEach the test suite")

    })
    beforeEach(function(){
        sinon.restore();
        console.log("------------------------BeforeEach the test suite")
    })
    it('Test the add method',function(){
        expect(myObj.add(1,2)).to.equal(3);
        expect(10).to.be.a('number').but.not.a('string');
    })
    it('Test Chai.js Expect',function(){
        expect(10).to.be.a('number').but.not.a('string');
        expect(true).to.be.a('boolean').but.not.a('number');
    })

    it('Test for object',function(){
        expect(tVar).to.be.a('object');
        expect(tVar).which.is.an('object');
        expect(tVar).to.be.a('object').has.a.property('name');
        expect(tVar).to.be.a('object').not.have.a.property('lastName');
        expect(tVar).to.be.a('object').has.a.property('name').which.is.a('string');
        expect(tVar).to.be.a('object').has.a.property('age').which.is.a('number');
        expect(tVar).to.be.a('object').has.a.property('name').to.be.equal('abc');
        expect(typeof(tVar)=='object').to.be.true;
        expect(tVar).which.is.not.frozen;
        Object.freeze(tVar);
        expect(tVar).to.be.frozen;
    })

    it('Spy the add method',function(){
        //It is creating a wrapper around the add method which will keep tract of all the activity happening at th add method
        var spy = sinon.spy(myObj,"add");
        const arg1 =4;
        const arg2 =6;
        myObj.callAnotherFn(arg1,arg2);
        //sinon.assert.calledTwice(spy)  //sinon way of testing assertion
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(arg1,arg2)).to.be.true;
       
    })
    it('Spy the Callback method',function(){
        var callback = sinon.spy();
        myObj.callTheCallBack(callback);
        expect(callback.calledOnce).to.be.true;  
    })
    it('Mock the Say hello method',function(){
        var mock = sinon.mock(myObj);
        var expectation =mock.expects("sayHello");
        expectation.exactly(1);
     myObj.callAnotherFn(10,5);
mock.verify();
    })
 }) 

 describe.skip('Test suite for stub',()=>{
    it('Stub the add method',()=>{
    var stub = sinon.stub(myObj,"add");
    stub.withArgs(10,20)
    .onFirstCall().returns(100)
    .onSecondCall().returns(1000);
    expect(myObj.callAnotherFn(10,20)).to.be.equal(100);
    expect(myObj.callAnotherFn(10,20)).to.be.equal(1000);
    })

    it('Test the Promise',function(done){
        //if we set the timeout to 5000 then it will wait for the promise to resolve before 5 seconds and throw error
        //if it does not resolve within 5 seconds so we can set to 0 so that it waits for until it resolves o reject
        this.timeout(0);
       myObj.testPromise()
       .then((result)=>{
        expect(result).to.be.equal(6);
        done();
       })
 })

 it('Test the Promise using chai as promised',function(){
    this.timeout(0);
 return expect(myObj.testPromise()).to.eventually.equal(6);
})
});

describe('XHR test suite', function(){
    it("Mock and stub xhr call", function(done) {
        var obj = { id: 423 };
        const scope = nock("https://echo-service-new.herokuapp.com")
          .post("/echo")
          .reply(200, obj);
        myObj
          .xhrFn()
          .then(function(result) {
            console.log(result);
            expect(result).to.be.eql(obj);
            done();
          })
          .catch(error => {
            done(new Error("test case failed: " + error));
          });
      });
})