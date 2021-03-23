const elementsArray = [];

elementsArray.camisa = window.sessionStorage.getItem('camisa') || false;
elementsArray.cabelo = window.sessionStorage.getItem('cabelo');
elementsArray.sombrancelha = window.sessionStorage.getItem('sombrancelha');
elementsArray.olho = window.sessionStorage.getItem('olho');
elementsArray.nariz = window.sessionStorage.getItem('nariz');
elementsArray.boca = window.sessionStorage.getItem('boca');

let html = dataCraftArray.block.print.blockIn;
if (elementsArray.camisa != false) {
  html +=
    dataCraftArray.element[elementsArray.camisa].dataPrint;
}
if (elementsArray.cabelo != 'false') {
  html +=
    dataCraftArray.block.print.cabelo +
    dataCraftArray.element[elementsArray.cabelo].dataPrint +
    dataCraftArray.block.print.blockOut;
}
if (elementsArray.sombrancelha != 'false') {
  html +=
    dataCraftArray.block.print.sombrancelha +
    dataCraftArray.element[elementsArray.sombrancelha].data +
    dataCraftArray.block.print.blockOut;
}
if (elementsArray.olho != 'false') {
  html +=
    dataCraftArray.block.print.olho +
    dataCraftArray.element[elementsArray.olho].data +
    dataCraftArray.block.print.blockOut;
}
if (elementsArray.nariz != 'false') {
  html +=
    dataCraftArray.block.print.nariz +
    dataCraftArray.element[elementsArray.nariz].data +
    dataCraftArray.block.print.blockOut;
}
if (elementsArray.boca != 'false') {
  html +=
    dataCraftArray.block.print.boca +
    dataCraftArray.element[elementsArray.boca].data +
    dataCraftArray.block.print.blockOut;
}

var data = '<svg xmlns="http://www.w3.org/2000/svg" id="svg-craft" viewBox="0 0 300 220">' + html + '</svg>';
const img_svg = document.getElementById("svg-craft");
img_svg.src = 'data:image/svg+xml;utf8,'+encodeURIComponent(data);

function download_img(el) {
  const canva = document.createElement("canvas");
  canva.width = 1200;
  canva.height = 800;
  const context_canva = canva.getContext("2d");

  context_canva.drawImage(
    img_svg,
    0,
    0,
    canva.width,
    canva.height
  );

  var image = canva.toDataURL("image/jpg");
  el.href = image;
}
