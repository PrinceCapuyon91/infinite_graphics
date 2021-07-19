$(".buttonControl").on("click", function () {
  var showSelector = $(this).data("show");
  $(".project").hide();
  $(showSelector).show();
});
