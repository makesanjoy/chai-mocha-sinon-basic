const Student = require('../mApp/student');
const assert = require('chai').assert;
var expect = require('chai').expect

describe('Create Tests',()=>{
     it('create a user in DB',()=>{
        const sam =new Student({name: "Sam",})
            sam.save()
            .then(()=>{
                assert(!sam.isNew)
            })
            .catch(()=>{
                console.log("error");
            })
     })
});

// All create tests

describe('Read Tests', ()=>{
    let reader;
    beforeEach((done)=>{
       reader = Student({name:"Reader"})
       reader.save()
       .then(()=>{
        done();
       })
    })

    it('Read a user: Reader',(done)=>{
       Student.find({name:"Reader"})
       .then((students)=>{
              // id is a BSON value so we cannot compare directly we need to covert to String and compare 
              assert(reader._id.toString() === students[0]._id.toString());
              done();
       })
    })
})



// All update test

describe('Update Test',()=>{
     let updater;
    beforeEach((done)=>{
    updater = new Student({name:"UPDATER"})
    updater.save()
    .then(()=>done())
    })
    it('Set and Save test',()=>{
   updater.set('name','UPDater')
   updater
   .save()
   expect(updater.name).to.equal("UPDater")
   console.log(updater.name)
    })
})