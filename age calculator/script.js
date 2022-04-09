function age() {
  var dateEntered = document.getElementById("date").value;
  var monthEntered = document.getElementById("month").value;
  var yearEntered = document.getElementById("year").value;

  var rightNow = new Date();
  var currentDate = rightNow.getDate();
  var currentMonth = 1 + rightNow.getMonth();
  var currentYear = rightNow.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dateEntered > currentDate) {
    currentDate = currentDate + month[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (monthEntered > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
  var d = currentDate - dateEntered;
  var m = currentMonth - monthEntered;
  var y = currentYear - yearEntered;

  document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years, " + m + " Months & " + d + " Days";
}
