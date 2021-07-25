$(document).ready(function() {
    $("form#formADD").submit(function(event) {
            var name = $("input#MERGE1").val();
            var email = $("input#MERGE0").val();
            var message = $("textarea#comment").val();
            if ($("input#MERGE1").val() && $("input#MERGE0"))) {
            alert(name + ", we have received your message. How can we assist you.");
        } else {
            alert("Please enter your name and email!");
        }
    });

});