module.exports = {
  parse : function(req, res){
            console.log(req);
            console.log("funcName: "+req.body.funcName);
            try{
                eval(req.body.answer);
                var result = eval(req.body.funcName+'(1,1)'), expectedResult = 2;
            }catch(err){
                 res.send("syntax error!");
                 return;
            };
            if(result != expectedResult){
                res.send("wrong answer!");
            }else{
                res.send("correct answer!");
            }

          }
};
