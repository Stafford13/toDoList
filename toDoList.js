/*
Eric Stafford
Date: 10.2.19
Most recent revision:10.20.19
*/

//writeline through text when clicked on


function addBox()
{
    event.preventDefault();

var a = document.getElementById("task").value;
var b = document.getElementById("days").value;
var color;
if (b <= 3 && b >=0) {
     color = "alert-danger";
}else if (b <= 7 && b >= 4){
    color = "alert-warning";
} else {
    color = "alert-secondary";
}
  document.getElementById("printableArea").innerHTML=document.getElementById("printableArea").innerHTML+
  "<div class='col-auto justify-content-around alert " + color + " alert-dismissible fade show'><div class='col-auto'><div class='row'>" + a + "</div><div class='row'>" + b + " Day(s)</div></div><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";

  $('#myForm')[0].reset();
}


/*


Task and Days should be Required!!



Submit button needs to be responsive to different sizes.

/*


// var date = document.getElementById('deadline');

// function validateDate(date) {
//     //get start of day using moment.js
//     const now = Moment().startOf('day').toDate();
//     if (date < now) {
//         alert("FUCK");
//         return false; //date is before today's date
//     } else {
//         alert("YAY");
//         return true; //date is today or some day forward
// }}

// function isDateBeforeToday(date) {
//     return new Date(date.toDateString()) < new Date(new Date().toDateString());
// }
*/