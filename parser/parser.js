module.exports = {
  parse : function(req, res){
            try{    
                eval(req.body.answer);
                var result = eval('req.body.funcName(1,1)'), expectedResult = 2;
                console.log("funcName: "+req.body.funcName);
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
