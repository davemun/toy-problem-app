
var testSuite = {};

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

module.exports = testSuite;
