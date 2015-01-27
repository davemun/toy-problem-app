
var testSuite = {};

testSuite.r1 = Math.random();
testSuite.r2 = Math.random();

testSuite.rAns = testSuite.r1 + testSuite.r2;

testSuite.tests = [{
    args:[1,2],
    ans: 3
  },
  {
    args:[4,5],
    ans: 9
  },
  {
    args:[1.3,2.8],
    ans: 4.1
  },
  {
    args:[-4,2],
    ans: -2
  },
  {
    args:[-4,-9.5],
    ans: -13.5
  },
  {
    args:[testSuite.r1,testSuite.r2],
    ans: testSuite.rAns
  }
];

module.exports = testSuite;

