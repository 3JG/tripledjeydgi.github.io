const elementsArray = [];

elementsArray.corpele = window.sessionStorage.getItem("corpele");
elementsArray.corcabelo = window.sessionStorage.getItem("corcabelo");
elementsArray.corsobrancelha = window.sessionStorage.getItem("corsobrancelha");
elementsArray.corolho = window.sessionStorage.getItem("corolho");

elementsArray.corpo = window.sessionStorage.getItem("corpo");
elementsArray.cabelo = window.sessionStorage.getItem("cabelo");
elementsArray.sobrancelha = window.sessionStorage.getItem("sobrancelha");
elementsArray.olho = window.sessionStorage.getItem("olho");
elementsArray.nariz = window.sessionStorage.getItem("nariz");
elementsArray.boca = window.sessionStorage.getItem("boca");

console.log(elementsArray);

let html = '<defs><style>';
if ('corpele' in elementsArray && elementsArray.corpele != 'false') {
  html += '.pele-class { fill:' +
    dataCraftArray.element[elementsArray.corpele].dataCor + ';}';
}else{
  html += '.pele-class {fill:white;}';
}

if ('corcabelo' in elementsArray && elementsArray.corcabelo != 'false') {
  html += '.cabelo-class-1 { fill:' +
    dataCraftArray.element[elementsArray.corcabelo].dataCor + ';}';
}else{
  html += '.cabelo-class-1 {fill:#000;}';
}

if ('corsobrancelha' in elementsArray && elementsArray.corsobrancelha != 'false') {
  html += '.sobrancelha-class-1 { fill:' +
    dataCraftArray.element[elementsArray.corsobrancelha].dataCor + ';}';
}else{
  html += '.sobrancelha-class-1 {fill:#000;}';
}

if ('corolho' in elementsArray && elementsArray.corolho != 'false') {
  html += '.olho-class-3 { fill:' +
    dataCraftArray.element[elementsArray.corolho].dataCor + ';}';
}else{
  html += '.olho-class-3 {fill:#000;}';
}

html += 
  ".olho-class-1{fill:#000;}" +
  ".olho-class-2{fill:#fff;}" +

  '.nariz-class-1,.nariz-class-2{fill:#000;}' +
  '.boca-class-1 {fill:#000;}' +
  '.boca-class-2 {fill:none;}' +

  '</style></defs>' + dataCraftArray.block.preview.blockIn;

html += dataCraftArray.element[43].dataPreview;

if (elementsArray.corpo != 'false') {
  html += dataCraftArray.element[elementsArray.corpo].dataPreview;
}

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
html += dataCraftArray.block.preview.blockOut;

var data =
  '<svg xmlns="http://www.w3.org/2000/svg" id="svg-craft" viewBox="0 0 203.2 152.4">' +
  html +
  "</svg>";
const img_svg = document.getElementById("svg-craft");
img_svg.src = "data:image/svg+xml;utf8," + encodeURIComponent(data);

function editCraft() {
  window.sessionStorage.setItem("corpele", elementsArray.corpele || false);
  window.sessionStorage.setItem("corcabelo", elementsArray.corcabelo || false);
  window.sessionStorage.setItem("corsobrancelha", elementsArray.corsobrancelha || false);
  window.sessionStorage.setItem("corolho", elementsArray.corolho || false);

  window.sessionStorage.setItem("corpo", elementsArray.corpo || false);
  window.sessionStorage.setItem("cabelo", elementsArray.cabelo || false);
  window.sessionStorage.setItem("sobrancelha", elementsArray.sobrancelha || false);
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
