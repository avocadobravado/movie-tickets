// business logic
function Ticket (movie, time, age) {
  this.selectedMovie = movie;
  this.selectedTime = time;
  this.selectedAge = age;
}

Ticket.prototype.watchMovie = function() {
  return "You have chosen " + this.selectedMovie + ".";
}
// Ticket.prototype.watchTime = function() {
//   return "You have chosen the " + this.selectedTime + " showing.";
// }
// front end logic

$(document).ready(function() {
  $("#theatreForm").submit(function(event) {
  event.preventDefault();

  var userMovie = $("select#movieName").val();
  var userTime = $("select#timeOfDay").val();
  var userAge = parseInt($("select#age").val());

  var newTicket = new Ticket(userMovie, userTime, userAge);

  var price = 0;

  if (userAge === 1 || userAge === 3 ) {
    price += 3;
  } else if (userAge === 2) {
    price += 5;
  }
  if (userTime === "afternoon") {
    price += 2;
  } else if (userTime === "evening") {
    price += 5;
  }

$("#results").show();
  // newTicket.movie.forEach(function(movie) {
    $(".movieName").text(newTicket.watchMovie());
    $(".price").text("$" + price + ".");
    // $(".timeOfDay").text(userTime);
    // $(".timeOfDay").text(newTicket.watchTime());
    $(".timeOfDay").html("You have chosen a " + "<b>" + userTime +  "</b>" + " showing.");
  });
});
