module.exports = {
  parse : function(req, res){
            eval(req.body.answer);
            var result =  sumFunc(1,1), expectedResult = 2;
            if(result != expectedResult){
                res.send("wrong answer!");
            }else{
                res.send("correct answer!");
            }
          }
};
