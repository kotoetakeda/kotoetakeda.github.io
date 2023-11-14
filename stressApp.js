function reset() {
  desc = document.getElementsByClassName('desc');
  let i = 0;
  while (i < desc.length) {
    id = desc[i].id;
    // document.getElementById(id+"_tag").style.listStyle = "disc";
    // document.getElementById(id+"_tag").style.listStylePosition = "inside";
    document.getElementById(id+"_tag").style.fontSize = "20px";
    document.getElementById(id+"_tag").style.fontWeight = "normal";
    document.getElementById(id).style.display = "none";
    i++;
  }
}
function selection(id) {
  const tag = document.getElementById(id+"_tag");
  const desc = document.getElementById(id);
  tag.style.fontSize = "32px";
  tag.style.fontWeight = "bold";
  desc.style.display = "block";
}