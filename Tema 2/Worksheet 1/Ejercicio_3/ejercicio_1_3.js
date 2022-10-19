var i = 60;

function contador() {
  if (i != 0) {
    document.write(i + "</br>");
    setTimeout(contador, 1000);
    i -= 1;
  } else {
    document.write("Final");
  }
}
contador();
