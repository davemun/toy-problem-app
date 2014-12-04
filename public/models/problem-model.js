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
            console.log('success')
            alert(data)
            console.log(data);
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
