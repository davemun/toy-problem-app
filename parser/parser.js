module.exports = {

  parse : function(req, res){
          console.log(req.body);

            //test function
            if(req.body.test){
              try{
                  eval(req.body.answer);
                  console.log("test.args==================");
                  console.log(req.body.testArgs.split(','));
                  console.log("test.body==================");
                  console.log(req.body);
                  var result = eval(req.body.funcName+'.apply(null,'+args+')');

                  res.send(
                    { 
                      testFunc: true,
                      testArgs: args,
                      result: result
                    } 
                  );                   

              }catch(err){
                console.log("in catch");  
                  res.send(
                    { 
                      testFunc: true,
                      testArgs: args,
                      result: "Syntax Error!"
                    } 
                  );
              }
              return;
          }else{
            //submit function
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
        }
};

