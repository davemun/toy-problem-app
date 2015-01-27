
var testSuite = {};

testSuite.r1 = Math.random();
testSuite.r2 = Math.random();

testSuite.tests = [{
    args:[[
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]],
    ans: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  },
  {
    args:[[
      [1,2,3,10],
      [4,5,6,12],
      [7,8,9,15]
    ]],
    ans: [1, 2, 3, 10, 12, 15, 9, 8, 7, 4, 5, 6]
  },
  {
    args:[[[1]]],
    ans: [1]
  },
  {
    args:[[[1],[2],[3],[4]]],
    ans: [1, 2, 3, 4]
  },
  {
    args:[[
      [1,2,3,testSuite.r1],
      [4,5,6,testSuite.r2],
      [7,8,9,15]
    ]],
    ans: [1, 2, 3, testSuite.r1, testSuite.r2, 15, 9, 8, 7, 4, 5, 6]
  }
];

module.exports = testSuite;
