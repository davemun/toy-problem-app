
$("#subans").click(function(e)
{
    console.log('inside subans');
    var postData = $('#solutionform').serializeArray();
    var formURL = "/problems";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //empty out unit tests div
            $('.testResults').html("");

            //hide all overall progress alerts
            $('.problem-success').hide();
            $('.problem-incomplete').hide();
            $('.problem-failure').hide();


            //show relevant progress alert
            if(data.status === "success"){
                $('.problem-success').text(data.message).show();
            }else if(data.status === "incomplete"){
                $('.problem-incomplete').text(data.message).show();
            }else if(data.status === "failure"){
                $('.problem-failure').text(data.message).show();
            }


            //go through each unit test result and create+append that result to the test result section
            data.testProgress.forEach(function(testResult){

                var arguments = $('<div><strong>Input Arguments:</strong> '+testResult[0].split(',').join(' , ')+'</div>');
                var result = $('<div><strong>Actual Result:</strong> '+testResult[1]+'</div>');
                var expectedResult = $('<div><strong>Expected Result:</strong> '+testResult[2]+'</div>');
                var status = $('<div><strong>Status:</strong> '+testResult[3]+'</div>');

                var alert = $('<div class="alert  alert-dismissible" role="alert"></div>');

                if(testResult[3] === "success"){
                    $(alert).addClass("alert-success").addClass("problem-success");
                }else if(testResult[3] === "failure"){
                    $(alert).addClass("alert-danger").addClass("problem-failure");
                }else if(testResult[3] === "error"){
                    $(alert).addClass("alert-danger").addClass("problem-error");
                }

                $(alert).append([arguments, result, expectedResult, status]);
                $(alert).appendTo('.testResults');

            });

        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log('error')
        }
    });
    e.preventDefault(); //STOP default action
    //e.unbind(); //unbind. to stop multiple form submit.
});

$("#testfunc").click(function(e)
{
    var postData = $('#solutionform').serializeArray();
    postData.push({"name": "test", "value": "true"});
    var formURL = "/problems";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            //empty out unit tests div
            $('.testResults').html("");

            //hide all overall progress alerts
            $('.problem-success').hide();
            $('.problem-incomplete').hide();
            $('.problem-failure').hide();

            //if single run test function
            if(data.result === "Syntax Error!"){

              console.log('Syntax error on test')

            }else if(data.testFunc){

                var alert = $('<div class="alert  alert-dismissible" role="alert"></div>');
                var arguments = $('<div><strong>Input Arguments:</strong> '+data.testArgs.split(',').join(' , ')+'</div>');
                var result = $('<div><strong>Result:</strong> '+data.result+'</div>');
                $(alert).append([arguments, result]);
                $(alert).addClass("alert-info").addClass("problem-incomplete");
                $(alert).appendTo('.testResults');
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          $('.testResults').html("");
          $('.problem-success').hide();
          $('.problem-incomplete').hide();
          $('.problem-failure').hide();
          $( ".test" ).remove();
          var alert = $('<div class="alert  alert-dismissible" role="alert"></div>');
          var arguments = $('<div><strong>Syntax Error</strong></div>');
          var result = $('<div><strong>Check code and arguments</strong> </div>');
          $(alert).append([arguments, result]);
          $(alert).addClass("alert-info").addClass("test");
          $(alert).appendTo('.testResults');
          console.log('error')
        }
    });
    e.preventDefault(); //STOP default action
    //e.unbind(); //unbind. to stop multiple form submit.
});
