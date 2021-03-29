const elementsArray = [];

elementsArray.cabelo = window.sessionStorage.getItem("cabelo");
elementsArray.sobrancelha = window.sessionStorage.getItem("sobrancelha");
elementsArray.olho = window.sessionStorage.getItem("olho");
elementsArray.nariz = window.sessionStorage.getItem("nariz");
elementsArray.boca = window.sessionStorage.getItem("boca");

let html = dataCraftArray.block.preview.blockIn;
if (elementsArray.cabelo != "false") {
  html += dataCraftArray.element[elementsArray.cabelo].dataPreview;
}
if (elementsArray.sobrancelha != "false") {
  html +=
    dataCraftArray.block.preview.sobrancelha +
    dataCraftArray.element[elementsArray.sobrancelha].data +
    dataCraftArray.block.preview.blockOut;
}
if (elementsArray.olho != "false") {
  html +=
    dataCraftArray.block.preview.olho +
    dataCraftArray.element[elementsArray.olho].data +
    dataCraftArray.block.preview.blockOut;
}
if (elementsArray.nariz != "false") {
  html +=
    dataCraftArray.block.preview.nariz +
    dataCraftArray.element[elementsArray.nariz].data +
    dataCraftArray.block.preview.blockOut;
}
if (elementsArray.boca != "false") {
  html +=
    dataCraftArray.block.preview.boca +
    dataCraftArray.element[elementsArray.boca].data +
    dataCraftArray.block.preview.blockOut;
}

var data =
  '<svg xmlns="http://www.w3.org/2000/svg" id="svg-craft" viewBox="0 0 203.2 152.4">' +
  html +
  "</svg>";
const img_svg = document.getElementById("svg-craft");
img_svg.src = "data:image/svg+xml;utf8," + encodeURIComponent(data);

function editCraft() {
  window.sessionStorage.setItem("cabelo", elementsArray.cabelo || false);
  window.sessionStorage.setItem(
    "sobrancelha",
    elementsArray.sobrancelha || false
  );
  window.sessionStorage.setItem("olho", elementsArray.olho || false);
  window.sessionStorage.setItem("nariz", elementsArray.nariz || false);
  window.sessionStorage.setItem("boca", elementsArray.boca || false);

  window.sessionStorage.setItem("pageEdit", true);

  location.href = "creativity.html";
}

function download_img(el) {
  const canva = document.createElement("canvas");
  canva.width = 203.2;
  canva.height = 152.4;
  const context_canva = canva.getContext("2d");

  context_canva.drawImage(img_svg, 0, 0, canva.width, canva.height);

  var image = canva.toDataURL("image/jpg");
  el.href = image;
}
