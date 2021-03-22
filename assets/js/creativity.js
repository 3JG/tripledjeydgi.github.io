let elementsArray = [];
const contentElements = document.getElementById("content-elements");

const craftArtsId = window.sessionStorage.getItem('craftArtsId') || false;
const pageEdit = window.sessionStorage.getItem('pageEdit') || false;

if (craftArtsId || pageEdit) {
  elementsArray.cabelo = window.sessionStorage.getItem('cabelo') || 'false';
  elementsArray.sombrancelha = window.sessionStorage.getItem('sombrancelha') || 'false';
  elementsArray.olho = window.sessionStorage.getItem('olho') || 'false';
  elementsArray.nariz = window.sessionStorage.getItem('nariz') || 'false';
  elementsArray.boca = window.sessionStorage.getItem('boca') || 'false';
  elementsArray.camisa = window.sessionStorage.getItem('camisa') || 'false';

  window.sessionStorage.removeItem("pageEdit");
}

for (var key in dataCraftArray.element) {
  const element = dataCraftArray.element[key];

  const div = document.createElement("div");
  div.classList.add("col");
  div.classList.add("d-block");
  div.classList.add("item-element-create");
  div.classList.add(element.tipo);

  const svg = document.createElement("svg");
  svg.classList.add("element-craft");
  svg.dataset.element = element.tipo;
  svg.dataset.id = element.id;
  svg.setAttribute("viewBox", "35 40 200 250");

  if ('class' in element) {
    svg.classList.add(element.class);
  }

  const html =
    dataCraftArray.block.item.blockIn +
    element.data +
    dataCraftArray.block.item.blockOut;

  svg.innerHTML = html;

  div.appendChild(svg);
  contentElements.appendChild(div);

  contentElements.innerHTML = contentElements.innerHTML;
}
document.querySelector(".menu-active").click();

const craft = document.getElementById("svg-craft");
craft.setAttribute("viewBox", "0 0 203.2 152.4");

function draw() {
  let html = dataCraftArray.block.preview.blockIn;
  if ('cabelo' in elementsArray && elementsArray.cabelo != 'false') {
    html += dataCraftArray.element[elementsArray.cabelo].dataPreview;
  }
  if ('sombrancelha' in elementsArray && elementsArray.sombrancelha != 'false') {
    html +=
      dataCraftArray.block.preview.sombrancelha +
      dataCraftArray.element[elementsArray.sombrancelha].data +
      dataCraftArray.block.preview.blockOut;
  }
  if ('olho' in elementsArray && elementsArray.olho != 'false') {
    html +=
      dataCraftArray.block.preview.olho +
      dataCraftArray.element[elementsArray.olho].data +
      dataCraftArray.block.preview.blockOut;
  }
  if ('nariz' in elementsArray && elementsArray.nariz != 'false') {
    html +=
      dataCraftArray.block.preview.nariz +
      dataCraftArray.element[elementsArray.nariz].data +
      dataCraftArray.block.preview.blockOut;
  }
  if ('boca' in elementsArray && elementsArray.boca != 'false') {
    html +=
      dataCraftArray.block.preview.boca +
      dataCraftArray.element[elementsArray.boca].data +
      dataCraftArray.block.preview.blockOut;
  }
  craft.innerHTML = html;
}
draw();

document.querySelectorAll(".element-craft").forEach(function (element) {
  element.addEventListener("click", function () {
    if ( this.classList.contains('login-required') ) {
      alert('Realize o login para poder utilizar este elemento');
    } else {
      elementsArray[element.dataset.element] = parseInt(element.dataset.id);
      draw();
    }
  });
});

function selectMenuElement(classItem, el) {
  document.querySelectorAll(".menu-active").forEach(function (element) {
    element.classList.remove("menu-active");
  });
  el.classList.add("menu-active");

  document
    .querySelectorAll(".item-element-create.d-block")
    .forEach(function (element) {
      element.classList.add("d-none");
      element.classList.remove("d-block");
    });

  document
    .querySelectorAll(".item-element-create." + classItem)
    .forEach(function (element) {
      element.classList.add("d-block");
      element.classList.remove("d-none");
    });
}

document.querySelector(".check-button").addEventListener("click", function () {
  window.sessionStorage.setItem("camisa", elementsArray.camisa || false);
  window.sessionStorage.setItem("cabelo", elementsArray.cabelo || false);
  window.sessionStorage.setItem(
    "sombrancelha",
    elementsArray.sombrancelha || false
  );
  window.sessionStorage.setItem("olho", elementsArray.olho || false);
  window.sessionStorage.setItem("nariz", elementsArray.nariz || false);
  window.sessionStorage.setItem("boca", elementsArray.boca || false);

  location.href = "preview.html";
});

document.querySelector(".x-button").addEventListener("click", function () {
  elementsArray = [];
  window.sessionStorage.removeItem("camisa");
  window.sessionStorage.removeItem("cabelo");
  window.sessionStorage.removeItem("sombrancelha");
  window.sessionStorage.removeItem("olho");
  window.sessionStorage.removeItem("nariz");
  window.sessionStorage.removeItem("boca");

  draw();
});

if (craft_user_logger) {
  document.querySelectorAll(".login-required").forEach((element) => {
    element.classList.remove("login-required");
  });
}