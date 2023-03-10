function SaveStudentDetails() {
    validateControls();
}
var gender;
function validateControls() {
    var fname = document.getElementById("fname")
    var lname = document.getElementById("lname")
    var email = document.getElementById("email")
    var message = document.getElementById("message")
    //FirstName
    if (fname.value == "") {
        window.alert("please enter your first name");
        fname.focus();
        return false;
    }
    //LastName
    else if (lname.value == "") {
        window.alert("please enter your last name");
        lname.focus();
        return false;
    }
    //Email
    else if (email.value == "") {
        window.alert("please enter your valid email Id");
        email.focus();
        return false;
    }
    // Message
    else if (message.value == "") {
        window.alert("please enter your message");
        message.focus();
        return false;
    }
    else {
        window.alert("Form is submitted successfully");
    }
    getControlValues();
}