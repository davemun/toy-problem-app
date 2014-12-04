'use strict'

$(function(){

  function showResult(data){

    console.log('showResult')

    // bootbox.alert(data[1]);
    $('#myModal').modal('show');

  }

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
            showResult(data);
            console.log('success');

          },
          error: function(jqXHR, textStatus, errorThrown)
          {
              console.log('error')
          }

      });
      e.preventDefault(); //STOP default action
      //e.unbind(); //unbind. to stop multiple form submit.
  });



});
