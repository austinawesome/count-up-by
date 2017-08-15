$(document).ready(function() {
  $("#form1").submit(function(event) {
    var base = parseInt($('[name="input1"]').val());
    var limit = parseInt($('[name="input2"]').val());
    for (var count = 0; count < limit; count += 0) {
      count = count + base;
      alert(count);
    };

    //  event.preventDefault();
  });
});