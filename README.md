# chai-mocha-sinon-basic

PROBLEM WITH MANUAL TESTING (using console.log and others)

1. Difficult to write effectively
2. Impact My actual program
3. Very Hard to read
4. Only a Temporary fixed

 USEFUL OF AUTOMATED TESTING

1.Results displayed in an informative way
2.Test files are seperate from real code
3.Output is easy to read and understand
4.Guarantees the code work as expected

RED>GREEN>REFACTOR
1.write the test even though they will fail
2.write the easiest code that we can pass the test
3.Go back and improve the code
4.Repeat until we are ready to move on

The Test-Driven Development (TDD) is a software engineering process that requires unit tests to be written before the code they are supposed to validate 
that relies on the repetition of a very short development cycle, where the requirements are transformed in test cases. With this, firstly the code will
fail (miserably), then the developer should write clean code that works to make the tests pass. 

                                                UNIT TESTING
“A test is not a unit test if:

It talks to the database
It communicates across the network
It touches the file system
It can’t run at the same time as any of your other unit tests
You have to do special things to your environment (such as editing config files) to run it.”

In other words, we can say that unit tests can’t have side-effects

                                               MOCHA(Test frame work)
Mocha is a JavaScript test framework running on Node.js and in the browser. Mocha allows asynchronous testing, test coverage reports, and use of any
assertion library.
                                               HOOKS IN MOCHA
There are usually four hooks --
   1.Before
   2.After
   3.AfterEach
   4.BeforeEach
Before and After hooks wil be executed once per test suite and AfterEach and BeforeEach will be executed after and before every test case within a test suite
If we write hook outside the describe block it will be considered as a root level hoook

                                              CHAI (Library)
Chai is a BDD / TDD assertion library for NodeJS and the browser that can be delightfully paired with any javascript testing framework.

Basically, mocha is a framework and chai is a library. Let's go a little deeper in mocha.

                                               SPY in unit testing(SINON)
-- Has the function been called?
-- If,Yes How many times?
-- What arguments?
-- Did it return something?
-- What was returned? 

A test spy is a function that records arguments, return value, the value of `this` and exception thrown (if any) for all its call

If you spy on a function, the function’s behavior is not affected. If you want to change how a function behaves, you need a stub.

    Sinon also provide its own assertion

                                            FUNCTION (WITH SIDE EFFECTS)
A function with side effects can be defined as a function that depends on something external, such as the state of some object, the current time
a call to a database, or some other mechanism that holds some kind of state. The result of such a function can be affected by a variety of things in 
addition to its parameters.
