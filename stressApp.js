function reset() {
  desc = document.getElementsByClassName('desc');
  let i = 0;
  while (i < desc.length) {
    id = desc[i].id;
    document.getElementById(id+"_tag").style.listStyle = "disc";
    document.getElementById(id+"_tag").style.listStylePosition = "inside";
    document.getElementById(id+"_tag").style.fontSize = "22px";
    document.getElementById(id+"_tag").style.fontWeight = "normal";
    document.getElementById(id).style.display = "none";
    i++;
  }
}
function selection(id) {
  document.getElementById(id+"_tag").style.listStyle = "circle";
  document.getElementById(id+"_tag").style.listStylePosition = "inside";
  document.getElementById(id+"_tag").style.fontSize = "32px";
  document.getElementById(id+"_tag").style.fontWeight = "bold";
  document.getElementById(id).style.display = "block";
}