var test2 = {};

test2.tests = [{
    args:['abc'],
    ans: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
  },
  {
    args:["qw"],
    ans: ["qw", "wq"]
  },
  {
    args:['kjl'],
    ans: ["kjl", "klj", "jkl", "jlk", "lkj", "ljk"]
  },
  {
    args:['iip'],
    ans: ["iip", "ipi", "pii"]
  },
  {
    args:['ooqo'],
    ans: ["ooqo", "oooq", "oqoo", "qooo"]
  },
  {
    args:['yotyy'],
    ans: ["yotyy", "yoyty", "yoyyt", "ytoyy", "ytyoy", "ytyyo", "yyoty", "yyoyt", "yytoy", "yytyo", "yyyot", "yyyto", "oytyy", "oyyty", "oyyyt", "otyyy", "tyoyy", "tyyoy", "tyyyo", "toyyy"]
  },
  {
    args:['bb'],
    ans: ["bb"]
  },
  {
    args:['a'],
    ans: ["a"]
  }
];

module.exports = test2;
