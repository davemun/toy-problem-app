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

                  if(JSON.stringify(result) !== JSON.stringify(expectedResult)){
                      testProgress.push([JSON.stringify(testPage.tests[i].args),JSON.stringify(result),JSON.stringify(expectedResult),"failure"]);
                  }else{
                      testProgress.push([JSON.stringify(testPage.tests[i].args),JSON.stringify(result),JSON.stringify(expectedResult),"success"]);
                  }

              }catch(err){
                   var status = "error";
                    testProgress.push([JSON.stringify(testPage.tests[i].args),"Syntax Error!",JSON.stringify(expectedResult),"error"]);
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
