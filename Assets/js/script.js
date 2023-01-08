// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {



  var now = dayjs();
  var civilianTime = now.format('hh');
  var militaryTime = now.format('HH');
  var currentDay = $('#currentDay');

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $('.saveBtn').click(function() {
    let timeslot = $(this).parent().attr('id');
    let input = $(this).prev().val();
    localStorage.setItem(timeslot, input);
  })

//code to execute each time slot
function setCurrentHour() {
  $('#calendar').children('div').each(function() {
    let divtarget = $(this);
    let timeSlot = divtarget.attr('id');
    let timeVal = timeSlot.charAt(5) + timeSlot.charAt(6);
    let priorEntries = localStorage.getItem(timeSlot);
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function setToPresent() {
    divtarget.removeClass('past future');
    divtarget.addClass('present');
  }
  function setToFuture() {
    divtarget.removeClass('past present');
    divtarget.addClass('future');
  }
  function setToPast() {
    divtarget.removeClass('future present');
    divtarget.addClass('past');
  }



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //




  // TODO: Add code to display the current date in the header of the page.
});
