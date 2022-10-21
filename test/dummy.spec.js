var chai = require('chai');
var expect = chai.expect;

describe('Dummy Test suite',function(){
it('dummy test case',function(){
    expect(true).to.be.true;
})
})

beforeEach(function(){
    console.log("============Root level hook")
})