
var test2 = {};

test2.rAns = test2.r1 + test2.r2;

test2.tests = [{
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

module.exports = test2;
