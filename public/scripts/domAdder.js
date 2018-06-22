window.addEventListener('load', function() {
  //  var calenderType = document.body.querySelector('#calender-size').value;
  //  addCalendar(calenderType);
  addCalendar("weekly");
});


/*THis toggles it eithe to the
7 day week or

var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";  weekday[1] = "Monday";weekday[2] = "Tuesday";weekday[3] = "Wednesday"; weekday[4] = "Thursday";weekday[5] = "Friday";weekday[6] = "Saturday";
var n = weekday[d.getDay()];
*/
function addCalendar(length) {
  var cal = document.body.querySelector('#calendar');
  var dayElem; // this will be the variable that is used tocreate each day element.
  if (length == "weekly") {
    for (let i = 0; i < 7; i++) {
      dayElem = document.createElement('div');
      dayElem.classList.add('inactive'); // if nothing is going on they have this cass
      dayElem.classList.add('day'); // every day gits this class
      cal.appendChild(dayElem);

    }
  }

}
