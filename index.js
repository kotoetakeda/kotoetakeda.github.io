window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

function clicked(id, className) {
    console.log(id)
    console.log(className)
    elem = document.getElementById(id);
    items = document.getElementsByClassName(className);
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('default_selected');
    }
    elem.classList.add('default_selected');
}

window.onload = function() {
  let sections = document.getElementsByClassName("sections");
  let sec = [];
  for (let i = 0; i < sections.length; i++) {
    let pos = sections[i].getBoundingClientRect().y;
    sec += [pos, sections[i]];
  }
  console.log(sec);

  window.addEventListener('scroll', function(event) {
    for (let i = 0; i < sec.length; i++) {
      if (window.scrollY >= sec[i][0]) {

      }
    }
    console.log(window.scrollY);
  })
  var alert = document.getElementById("alert");
  // var span = document.getElementsByClassName("close")[0];
  document.getElementById("contact_form").addEventListener("submit", function(event) {
      event.preventDefault();
      emailjs.send("service_sduk1tm","template_qrcwnlo",{
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
      })
      .then(res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("alert").classList.add('alertGood');

          // span.onclick = function() {
          //     modal.style.display = "none";
          // }
          // window.onclick = function(event) { //TODO: not working
          //     if (event.target == modal) {
          //         modal.style.display = "none";
          //     }
          // }
      })
      .catch(err => {
        document.getElementById("alert").classList.add('alertBad');
      })
  })
}