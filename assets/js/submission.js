document.addEventListener("DOMContentLoaded", function() {  
    // agent user
    var userAgent = navigator.userAgent;

    // screen
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    // Device type
    var deviceType = /Mobile|Tablet|iPad|iPhone|Android/.test(navigator.userAgent) ? "Mobile" : "Desktop";

    // Date
    var currentDate = new Date();

    var message = `Someone saw you resume: \n
    User Agent:${userAgent}, 
    Screen Width: ${screenWidth}, Screen Height:, ${screenHeight}
    Device Type: ${deviceType}
    Current Date: ${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}
    Current Time: ${currentDate.getHours()}:${currentDate.getMinutes()}
    `;


    // Construct the form data
    var formData = new FormData();
    formData.append("email", "you@example.com");
    formData.append("message", message);

    // Construct the AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mwkgyzvy", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        //   console.log("Form submitted successfully");
        } else {
        //   console.error("Failed to submit form");
        }
      }
    };
  
    // Send the AJAX request with the form data
    xhr.send(formData);
  });
  


