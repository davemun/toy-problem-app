exports.parse = function(req, res){
  res.send("good attempt!");
}

[{func: 'add',
  tests:[{
    args:[1,2],
    ans: 3
    },
    {
    args:[4,5],
    ans: 9
    },
    {
    args:[1,2],
    ans: 3
    },
    {
    args:[-4,2],
    ans: -2
    },
    {
    args:[-4,-9],
    ans: -13
    }]
  }];
