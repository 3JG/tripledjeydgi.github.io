const idUser = window.sessionStorage.getItem("craft_user_logger");


// Defina o número da página e itens por página
const page = 1; // página que você deseja acessar
const itemsPerPage = 50; // número de itens por página

// URL da sua rota do Google Apps Script
const url = `https://script.google.com/macros/s/AKfycbwBOP0dGFn5D-Z5mO_SKXNo0h4kkmtIoAHoONK4Sf5gB9D4QfmFOrVfbyq2NHYVBoKABw/exec?page=${page}&itemsPerPage=${itemsPerPage}`;

// Realiza a requisição GET
fetch(url)
  .then(response => response.json())  // Converte a resposta para JSON
  .then(querySnapshot => {
    querySnapshot.data.shift();

    querySnapshot.data.forEach(dataDoc => {
      id = dataDoc[0];

      if (id != "") {
      user = dataDoc[1]
      corpele = dataDoc[2]
      boca = dataDoc[3]
      cabelo = dataDoc[4]
      corcabelo = dataDoc[5]
      olho = dataDoc[6]
      corolho = dataDoc[7]
      sobrancelha = dataDoc[8]
      corsobrancelha = dataDoc[9]
      nariz = dataDoc[10]
      corpo = dataDoc[11]
      
      let html = '<defs><style>';
      if (corpele != '') {
        if (corpele.includes('#')){
          html += '.pele-class { fill:' + corpele + ';}';
        }
      }else{
        html += '.pele-class {fill:white;}';
      }

      if (corcabelo != '') {
        if (corcabelo.includes('#')){
          html += '.cabelo-class-1 { fill:' + corcabelo + ';}';
        }
      }else{
        html += '.cabelo-class-1 {fill:#000;}';
      }

      if (corsobrancelha != '') {
        if (corsobrancelha.includes('#')){
          html += '.sobrancelha-class-1 { fill:' + corsobrancelha + ';}';
        }
      }else{
        html += '.sobrancelha-class-1 {fill:#000;}';
      }

      if (corolho != '') {
        if (corolho.includes('#')){
          html += '.olho-class-3 { fill:' + corolho + ';}';
        }
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
      
      if (corpo in dataCraftArray.element) {
        html += dataCraftArray.element[corpo].dataPreview;
      }
      if (cabelo in dataCraftArray.element) {
        html += dataCraftArray.element[cabelo].dataPreview;
      }
      if (sobrancelha in dataCraftArray.element) {
        html +=
          dataCraftArray.block.preview.sobrancelha +
          dataCraftArray.element[sobrancelha].data +
          dataCraftArray.block.preview.blockOut;
      }
      if (olho in dataCraftArray.element) {
        html +=
          dataCraftArray.block.preview.olho +
          dataCraftArray.element[olho].data +
          dataCraftArray.block.preview.blockOut;
      }
      if (nariz in dataCraftArray.element) {
        html +=
          dataCraftArray.block.preview.nariz +
          dataCraftArray.element[nariz].data +
          dataCraftArray.block.preview.blockOut;
      }
      if (boca in dataCraftArray.element) {
        html +=
          dataCraftArray.block.preview.boca +
          dataCraftArray.element[boca].data +
          dataCraftArray.block.preview.blockOut;
      }
      html += dataCraftArray.block.preview.blockOut;

      var data =
        '<svg xmlns="http://www.w3.org/2000/svg" class="svg-craft" viewBox="0 0 203.2 152.4">' +
        html +
        "</svg>";
      
      const img_svg = document.createElement("img");
      img_svg.classList.add("card-img-top");
      img_svg.src = "data:image/svg+xml;utf8," + encodeURIComponent(data);

      const buttonEdit = document.createElement("button");
      buttonEdit.classList.add("myCraft-item-btn");
      buttonEdit.classList.add("btn");
      buttonEdit.classList.add("me-2");
      buttonEdit.classList.add("btn-primary");
      buttonEdit.classList.add("rounded-circle");
      buttonEdit.innerHTML = '<i class="bi bi-eye"></i>';

      buttonEdit.setAttribute("data-target-id", id);
      buttonEdit.setAttribute("data-target-corpele", corpele || false);
      buttonEdit.setAttribute("data-target-corcabelo", corcabelo || false);
      buttonEdit.setAttribute("data-target-corsobrancelha", corsobrancelha || false);
      buttonEdit.setAttribute("data-target-corolho", corolho || false);
      buttonEdit.setAttribute("data-target-corpo", corpo || false);
      buttonEdit.setAttribute("data-target-cabelo", cabelo || false);
      buttonEdit.setAttribute("data-target-sobrancelha", sobrancelha || false);
      buttonEdit.setAttribute("data-target-olho", olho || false);
      buttonEdit.setAttribute("data-target-nariz", nariz || false);
      buttonEdit.setAttribute("data-target-boca", boca || false);

      buttonEdit.addEventListener("click", function () {
        const id = buttonEdit.dataset.targetId;
        const corpele = buttonEdit.dataset.targetCorpele;
        const corcabelo = buttonEdit.dataset.targetCorcabelo;
        const corsobrancelha = buttonEdit.dataset.targetCorsobrancelha;
        const corolho = buttonEdit.dataset.targetCorolho;
        const corpo = buttonEdit.dataset.targetCorpo;
        const cabelo = buttonEdit.dataset.targetCabelo;
        const sobrancelha = buttonEdit.dataset.targetSobrancelha;
        const olho = buttonEdit.dataset.targetOlho;
        const nariz = buttonEdit.dataset.targetNariz;
        const boca = buttonEdit.dataset.targetBoca;
        
        window.sessionStorage.setItem("craftArtsId", id);
        window.sessionStorage.setItem("corpele", corpele || false);
        window.sessionStorage.setItem("corcabelo", corcabelo || false);
        window.sessionStorage.setItem("corsobrancelha", corsobrancelha || false);
        window.sessionStorage.setItem("corolho", corolho || false);
      
        window.sessionStorage.setItem("corpo", corpo || false);
        window.sessionStorage.setItem("cabelo", cabelo || false);
        window.sessionStorage.setItem("sobrancelha", sobrancelha || false);
        window.sessionStorage.setItem("olho", olho || false);
        window.sessionStorage.setItem("nariz", nariz || false);
        window.sessionStorage.setItem("boca", boca || false);

        location.href = "print.html";
      });

      const divBody = document.createElement("div");
      divBody.classList.add("card-body");
      
      const divName = document.createElement("div");
      divName.innerHTML = id

      const div = document.createElement("div");
      div.classList.add("myCraft-item");
      div.classList.add("me-2");
      div.classList.add("mb-2");
      div.classList.add("card");
      div.classList.add("col-md-3");

      div.appendChild(divName);
      div.appendChild(img_svg);
      
      divBody.appendChild(buttonEdit);
      
      div.appendChild(divBody);
      document.getElementById("myCraft").appendChild(div);
    }
    });

    const loadSpan = document.getElementById("load");
    if (loadSpan) {
      loadSpan.remove();  // Remove o elemento com o id "load" do DOM
    }
  })
  .catch(error => {
    // Em caso de erro
    console.error("Erro ao fazer a requisição:", error);
  });

