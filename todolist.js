$(document).ready(function() {

 $(".alert-danger").hide();

 $(".btn-default").on("click", function(e) {
  e.preventDefault();

  var newItem = $("#newItem").val().trim();
  var isDuplicate = false;
  $("td.word-td").each(function() {
   if ($(this).text().trim().toLowerCase() === newItem.toLowerCase()) {
    isDuplicate = true;
    return;
   }
  });
  if(isDuplicate) {
   $(".alert-danger").slideDown();
   return;
  }

  var newRow = $("<tr>");
  var wordTd = $("<td>").addClass("word-td").append(newItem);
  var deleteBtn = $("<button>").addClass("btn btn-danger").append("Remove");
  var doneBtn = $("<button>").addClass("btn btn-success").append("Done");
  var deleteTd = $("<td>").append(deleteBtn);
  var doneTd = $("<td>").append(doneBtn);

  newRow.append(wordTd).append(doneTd).append(deleteTd);
  $("tbody").append(newRow);

  $("#newItem").val("").focus();

 });

 $("table").on("click", ".btn-danger", function() {
  
   $(this).parent().parent().remove();
  

 });


 $("#newItem").on("keydown", function () {
  $(".alert-danger").fadeOut(1500);
 });


});










 
