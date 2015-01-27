//create an empty object to hold all our test
var testSuite = {};

//create random elements to use if we wanted to randomize args
testSuite.random1 = Math.random();
testSuite.random2 = Math.random();

//create array of tests
  //for each test
    //test.args is a literal containing the input to the function
    //test.ans is the expected output of the function
testSuite.tests = [{
    args:[1],
    ans: false
  },
  {
    args:[2],
    ans: true
  },
  {
    args:[3],
    ans: true
  },
  {
    args:[9],
    ans: false
  },
  {
    args:[67],
    ans: true
  },
  {
    args:[181],
    ans: true
  },
  {
    args:[301],
    ans: false
  },
  {
    args:[479],
    ans: true
  }
];

//export test for usage
module.exports = testSuite;
