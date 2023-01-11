// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var militaryTime = now.format('HH');
  var regularTime = now.format('hh');
  var currentDay = $('#currentDay');
  var now = dayjs();
  
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
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
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

  //conditional to check the times lots and compare to appropriate time 
      if (militaryTime < 9) {
        setToFuture();
      } else if (militaryTime >= 18) {
        setToPast();
      } else if (timeVal < 9) {
        if (timeVal == regularTime) {
          setToPresent();
        } else if (timeVal > regularTime || militaryTime == regularTime) {
          setToFuture();
        } else {
          setToPast();
        }
      } else if (timeVal >= 9) {
        if (timeVal == militaryTime) {
          setToPresent();
        } else if (timeVal > militaryTime) {
          setToFuture();
        } else {
          setToPast();
        }
      }
    })
  }


  //current hour function
  setCurrentHour();

  setInterval(function() {

  // TODO: Add code to display the current date in the header of the page.
    currentDay.text(dayjs().format('dddd, MMMM D, YYYY h:mm:ss a'));

    let currentHour = dayjs().format('hh');
    let currentHourMil = dayjs().format('HH');

     if (currentHourMil != militaryTime) {
      civilianTime = currentHour;
      militaryTime = currentHourMil;
      setCurrentHour();
    }
  }, 1000)

});
