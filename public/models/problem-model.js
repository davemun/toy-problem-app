$("#solutionform").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = "/problems";
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        success:function(data, textStatus, jqXHR)
        {
            if(data.status === "success"){
                $('.problem-success').text(data.message).show();
                $('.problem-failure').hide();
                $('.problem-error').hide();
            }else if(data.status === "failure"){
                $('.problem-success').hide();
                $('.problem-failure').text(data.message).show();
                $('.problem-error').hide();
            }else if(data.status === "error"){
                $('.problem-success').hide();
                $('.problem-failure').hide();
                $('.problem-error').text(data.message).show();
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log('error')
        }
    });
    e.preventDefault(); //STOP default action
    //e.unbind(); //unbind. to stop multiple form submit.
});


 var url = "/problems";
