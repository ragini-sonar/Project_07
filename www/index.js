var inputLabel;

function pushBtn(obj) {
  inputLabel = document.getElementById("inputLabel");
  var pushed = obj.innerHTML;
  console.log(pushed);

  if (pushed == "=") {
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
  } else if (pushed == "AC") {
    inputLabel.innerHTML = "0";
  } else {
    if (inputLabel.innerHTML == "0") {
      inputLabel.innerHTML = pushed;
    } else {
      inputLabel.innerHTML += pushed;
    }
  }
}
