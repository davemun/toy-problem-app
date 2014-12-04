
var test3 = {};

test3.r1 = Math.random();
test3.r2 = Math.random();

//test2.rAns = test2.r1 + test2.r2;

test2.tests = [{
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
      [1,2,3,test3.r1],
      [4,5,6,test3.r2],
      [7,8,9,15]
    ]],
    ans: [1, 2, 3, test3.r1, test3.r2, 15, 9, 8, 7, 4, 5, 6]
  }
];

module.exports = test3;
