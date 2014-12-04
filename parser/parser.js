module.exports = {

  parse : function(req, res){
            var testPage = require('../ansTests/'+req.body.funcName+'Test.js');
            var testProgress = [], successful = 0;


            for(var i = 0; i < testPage.tests.length; i++){

              var expectedResult = testPage.tests[i].ans;

              try{
                  eval(req.body.answer);

                  var result = eval(req.body.funcName+'.apply(null,'+JSON.stringify(testPage.tests[i].args)+')');

                      console.log('expectedResult', expectedResult);

                  if(result !== expectedResult){
                      testProgress.push([testPage.tests[i].args.toString(),result,expectedResult,"failure"]);
                  }else{
                      testProgress.push([testPage.tests[i].args.toString(),result,expectedResult,"success"]);
                  }
              }catch(err){
                   var status = "error";
                    testProgress.push([testPage.tests[i].args.toString(),"Syntax Error!",expectedResult,"error"]);
              };
            }

            //if they made it here all the tests completed without eval error
            for(var i = 0; i < testProgress.length; i++){
              if(testProgress[i][3] === "success"){
                successful++;
              }
            }

            var status = (successful === testPage.tests.length) ? "success" : "incomplete";

            if (successful === 0) status = 'failure';

            res.send(
              { testProgress: testProgress,
                message: "You passed "+successful+" out of "+testPage.tests.length+" tests!",
                status: status
              }
            );

          }
};
//0: null1: null2: "syntax error!
