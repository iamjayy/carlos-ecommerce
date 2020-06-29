//scroll to top on page refresh
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
//for arrow click
$(document).ready(function() {
  $("#down").on("click", function() {
    $("html").scrollTop(0);
    $("html, body").animate(
      {
        scrollTop: $("#featuredProducts").offset().top
      },
      1000
    );
  });
});
