module.exports = {

  parse : function(req, res){
            console.log(req.body);
            //test function
            if(req.body.test){
              try{
                  console.log(req.body);
                  eval(req.body.answer);

                  testArr = req.body.testArgs;

                  //turn ints in array into num from string
                  // for (var i = 0; i < testArr.length; i++) {
                  //   if(!isNaN(testArr[i])){
                  //     testArr[i] = parseInt(testArr[i]);
                  //   }
                  // }

                  //console.log("test.args2==================");
                  // console.log(testArr);
                  // console.log(JSON.stringify(testArr));


                  console.log(req.body.funcName+'.call(null,'+testArr+')');

                  var result = eval(req.body.funcName+'.call(null,'+testArr+')');

                  res.send(
                    {
                      testFunc: true,
                      testArgs: testArr,
                      result: result
                    }
                  );

              }catch(err){
                console.log("in catch");
                console.log(err); //BODY is not defined
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

