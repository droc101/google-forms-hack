var html = "<title>Google Forms Hack UI</title><h1>Answers:</h1><p>"; // Set up page basics
for (var i = 0; i < FB_PUBLIC_LOAD_DATA_[1][1].length; i++) { // loop through questions
    var a = "Invalid Type"; // by deafult, question is invalid.
    var q = FB_PUBLIC_LOAD_DATA_[1][1][i][1]; // question type (maybe, haven't worked on this for a while.)
    if (is_valid_question(i)) { // only if question is valid
        a = FB_PUBLIC_LOAD_DATA_[1][1][i][4][0][4][0][2]; // get the answer
        html += "<br><b>Question: " + q + "</b><br>Answer: " + a; // append the answer
    }
}
var win = window.open("", "Loading...", "toolbar=no,location = no,directories=no,status = no,menubar=no,scrollbars = yes,resizable=yes,width = 400,height=150,top = " + (screen.height - 550) + ",left=" + (screen.width - 840)); // popup the window
win.document.body.innerHTML = html; // set the content of the window

function is_valid_question(i) {
    var c1 = FB_PUBLIC_LOAD_DATA_[1][1][i][4][0].length == 5; // validate the arrays
    var c2 = FB_PUBLIC_LOAD_DATA_[1][1][i][3] === 0;
    return c1 && c2; // are both ok
}
