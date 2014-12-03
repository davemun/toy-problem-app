
var test1 = {};

test1.r1 = Math.random();
test1.r2 = Math.random();

test1.rAns = test1.r1 + test1.r2;

test1.tests = [{
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
    args:[test1.r1,test1.r2],
    ans: test1.rAns
  }
];

module.exports = test1;

