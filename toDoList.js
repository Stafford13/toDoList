/*
Eric Stafford
Date: 10.2.19
Most recent revision:10.15.19
*/

//add clickable x to boxes to hide block

//writeline through text when clicked on

function addBox()
{
    event.preventDefault();

var a = document.getElementById("task").value;
var b = document.getElementById("days").value;
var color;
if (b <= 3) {
     color = "background-color: lightcoral; color: darkred;";
}else if (b <= 7 && b >= 4){
    color = "background-color: lemonchiffon; color: goldenrod;";
} else {
    color = "background-color: lightgrey;";
}
  document.getElementById("printableArea").innerHTML=document.getElementById("printableArea").innerHTML+
  "<div class='col-auto justify-content-around' style='" + color + "'><div class='row'>" + a + " " + " " + "<button type='button' class='close' style='" + color + "' ata-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div><div class='row'>" + b + " " + "day(s)</div></div>";
}

/*


Remove button functionality


Color and background color related to the amount of days
// var color;
// if (b < 3) {
//      color = style="background-color: lightcoral; color: darkred;";
// }if (b <= 7 && b >= 4){
//     color = style="background-color: lemonchiffon; color: goldenrod;";
// } else {
//     color = style="background-color: lightgrey;";
// }

Task and Days should be Required


After submit, Task and Days should be deleted


No Border needed


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