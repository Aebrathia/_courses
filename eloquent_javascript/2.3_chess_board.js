var size = 80;
var line = "";
var result = "";

for (var i = 0; i < size; i++) {
  if (i % 2 === 0) {
    line += "#";
  } else {
    line += " ";
  }
}

line += "\n";

for (var i = 1; i <= size; i++) {
  if (i % 2 === 0) {
    result += " ";
  }
  result += line;
}

console.log(result);
