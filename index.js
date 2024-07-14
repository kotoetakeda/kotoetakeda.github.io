window.onbeforeunload = () => {
  window.scrollTo(0, 0);
  document.body.style.display = 'none'; // TODO: make a loading page
}

function clicked(id, className) {
  if (document.getElementById(id)) {
    elem = document.getElementById(id);
  } else {
    return
  }
  items = document.getElementsByClassName(className);
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('default_selected');
    }
    elem.classList.add('default_selected');
}

window.onload = function() {
  document.body.style.display = 'block';
  const sections = document.querySelectorAll('.sections');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 && rect.top <= (window.innerHeight / 2 || document.documentElement.clientHeight / 2) &&
          rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function onScroll() {
        sections.forEach((section) => {
            if (isInViewport(section)) {
              clicked(section.id + "_menu", 'menu_items');
            }
        });
    }

    window.addEventListener('scroll', onScroll);

  
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
      })
      .catch(err => {
        document.getElementById("alert").classList.add('alertBad');
      })
  })
}