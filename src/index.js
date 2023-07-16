setInterval(function () {
  //Austin
  let austinElement = document.querySelector("#austin");
  let austinDateElement = austinElement.querySelector(".date");
  let austinTimeElement = austinElement.querySelector(".time");
  let austinTime = moment().tz("US/Central");
  austinDateElement.innerHTML = austinTime.format("MMMM Do YYYY");
  austinTimeElement.innerHTML = austinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);
