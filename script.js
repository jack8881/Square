function square() {
  var value = document.getElementById('valu').value;
  var result = value * value;
  document.getElementById('result').innerHTML = result;
}

function clear() {
  document.getElementById('valu').value = null;
  document.getElementById('result').innerHTML = null;
}

document.getElementById('calculate').onclick = function() {square()};
document.getElementById('clear').onclick = function() {clear()};