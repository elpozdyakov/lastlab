$(document).ready(() => {

    $('#but').click(() => {
      const requestURL = 'www/' + $('#but').attr("value");
      
    if($("#check").prop('checked') == true && $('#but').attr("value") == 'Done') {  

      $.ajax({
        url: requestURL,
        type: 'GET',
        dataType : 'json', 
        success: (data) => {
          console.log('You received some data!', data);
  
          if (data.status && data.pic) {
            $('#picture').attr('src', data.pic);
            $('#status').html(data.status);
          } else {
            $('#status').html('Error' + requestURL);
            $('#picture').attr('src', '');
          }
        },
      });

    } else { alert('Галочку не поставил, завалить хочешь чтоли?') }

    });

    $(document).ajaxError(() => { $('#status').html('Error: unknown ajaxError!') });
    
  });

