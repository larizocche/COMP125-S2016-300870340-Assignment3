/**
* File Name: app.js 
* @author: Larissa Zocche
* @date: August 5, 2016
*
* Student # : 300870340
* WebSite: 
*
* @description: This is the main JavaScript file for this website.
*/

//IIFE  - Immediately Invoked Function Expression

(function () {
    "use strict";

    var xhr;
    /**
     * 
     */
    //named function instead an anonymous function;
    function readData() {
        //data loaded                   everything is ok
        if ((xhr.readyState === 4) && (xhr.status === 200)) 

        {
            var paragraphs = JSON.parse(xhr.responseText);

            var resume = [];

            resume[0] = document.getElementById("highlights1");
            resume[1] = document.getElementById("highlights2");
            resume[2] = document.getElementById("highlights3");
            resume[3] = document.getElementById("education");
            resume[4] = document.getElementById("experience");
            //projects
            resume[5] = document.getElementById("researchDescription");
            resume[6] = document.getElementById("researchDescription2");
            resume[7] = document.getElementById("researchDescription3");

            var resumeLength = resume.length - 1;
            // check to see if the data exists
            for (var index = resumeLength; index >= 0; index--) {
                //inject html tags along with the text
                console.log("JavaScript working");
                if (resume[index]) {
                    resume[index].innerHTML = paragraphs.resumeData[index].text;
                }
            }
        }
    }

    // app entry function
    function init() {
        xhr = new XMLHttpRequest(); //step 1: create the object
        xhr.open("GET", "Scripts/paragraphs.json", true);//step 2:true means async (do not have to wait for the request to complete)
        xhr.send(null); //step 3: submit the request to the server;
        xhr.addEventListener("readystatechange", readData)
    }

    window.addEventListener("load", init);

    //create a reference to the sendButton
    var sendButton = document.getElementById("sendButton");

    //cancel the default behaviour of the button
    sendButton.addEventListener("click", sendButtonClick);
    
    function sendButtonClick(event) {
        console.log("clicked");
    }
    //create a reference to the first name field
    var firstName = document.getElementById("firstName");

    //create a reference to the form
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("submitted");
        showFormInput();
        contactForm.reset();

    })
    function showFormInput() {
        console.log("*******************************")
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("E-mail: " + email.value);
        console.log("Contact number: " + contactNumber.value);
        console.log("Message: " + message.value);
        console.log("*******************************")
    }


})();



