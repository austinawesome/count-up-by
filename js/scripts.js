$(document).ready(function() {
  $("#form1").submit(function(event) {
    var base = Math.abs(parseInt($('[name="input1"]').val()));
    var limit = Math.abs(parseInt($('[name="input2"]').val()));
if (!base || !limit) {
  alert("fool me twice, well you can't fool me again");
}

    for (var count = base; count <= limit; count =count+base) {
      $("#results").append("<li>" + count + "</li>");
    };
event.preventDefault();
  });
});
