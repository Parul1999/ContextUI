var slider = document.querySelector("#slider-type1");
var output = document.querySelector("#showRange1");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
  output.innerHTML = this.value;
}