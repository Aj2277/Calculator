$(".clear").on('click', function(){
  $(".display").val('');
});

$(".calc").on('click', function(){
  if($(this).attr('data-role') != 'operator'){
    $(".display").val($(".display").val() + $(this).val());
    // alert('clicked' + $(this).val());
  }
  else if($(".display").val() != ''){
      $(".display").val($(".display").val() + $(this).val());
    }

  // if($(this).attr('data-role') == 'operator'){
  //     $('.calc').on('click', function(e){
  //       $(this).off(e);
  //       console.log('done');
  //     })
  //   }

});

$(".calculate").on('click', function(){
  var result = $(".display").val();
  $(".display").val(eval(result));
});

$(".deleteBtn").on('click', function(){
  $('.display').val(
    function(index, value){
      return value.substr(0, value.length - 1);
    }
  )
});
