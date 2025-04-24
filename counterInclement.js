var counter = 0;

function incrementar() {
  counter++;
  var display = document.getElementById("counterDisplay");

  display.textContent = `Contador: ${counter}`;
}

function mudarCor() {
  var box = document.getElementById("colorBox");
  var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  box.style.backgroundColor = randomColor;
}
 