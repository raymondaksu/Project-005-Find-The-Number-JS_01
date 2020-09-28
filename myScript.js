document.getElementById("button_1").addEventListener("click", nr_checker)

const random_number = Math.floor(Math.random()*10);
console.log("Random: ", random_number);

const input_area = document.getElementById("guess");
const check_button = document.getElementById("button_1");
const reset_button = document.getElementById("reset_button");
const desc = document.getElementById("result_count");
var counter = 1;

function setTheFocus() {
    input_area.focus();
}

setTheFocus();

check_button.addEventListener("click", nr_checker);
reset_button.addEventListener("click", reset_page);

input_area.addEventListener("keyup", function(evt) {
    if (evt.key == "Enter") {
        evt.preventDefault();
        check_button.click();
    }
});

reset_button.addEventListener("keyup", function(evt) {
    if (evt.key == "Enter") {
        evt.preventDefault();
        reset_button.click();
    }
});

function nr_checker() {
    let guess = parseInt(input_area.value);
    console.log("Guess: ", guess);


    if (! isNaN(guess)) {
        if (guess == random_number) {
            desc.innerHTML = "You found the number at " + counter + ".attempt";
            reset_button.style.display = "inline-block";
            check_button.style.display = "none";
            reset_button.focus();
        } else if (guess < random_number) {
            desc.innerHTML = "Go up. It was your " + counter + ".attempt!";
            counter++;
            input_area.value="";
            input_area.focus();
        } else {
            desc.innerHTML = "Go down. It was your " + counter + ".attempt!";
            counter++;
            input_area.value="";
            input_area.focus();
        }
    }
     else if (guess == ""){
            alert("Write number");
     }
     else {
            alert("Enter a number!");
            input_area.value="";
    }
}

function reset_page() {
    if (confirm("Do you want continue?")) {
        location.reload();
      } else {
        alert("Thanks for joining...");
        window.close('','_parent','');
      }
    location.reload();
}




