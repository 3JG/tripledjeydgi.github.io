document.querySelector("span#name-user").innerHTML = getNameCraft();

const idUser = window.sessionStorage.getItem("craft_user_logger");

db.collection("craftArts")
  .where("idUser", "==", idUser)
  .get()
  .then((querySnapshot) => {
    if ( querySnapshot.empty ) {
      document.getElementById("myCraft").innerHTML = '<a class="nav-link" onclick="window.sessionStorage.removeItem(\'craftArtsId\')" href="creativity.html">' +
      'Criar Meu Primeiro Craft' +
      '</a>';
    }
    querySnapshot.forEach((doc) => {
      const dataDoc = doc.data();

      let html = '<defs><style>';
      if ('corpele' in dataDoc && dataDoc.corpele != 'false') {
        if (dataDoc.corpele.includes('#')){
          html += '.pele-class { fill:' + dataDoc.corpele + ';}';
        }
      }else{
        html += '.pele-class {fill:white;}';
      }

      if ('corcabelo' in dataDoc && dataDoc.corcabelo != 'false') {
        if (dataDoc.corcabelo.includes('#')){
          html += '.cabelo-class-1 { fill:' + dataDoc.corcabelo + ';}';
        }
      }else{
        html += '.cabelo-class-1 {fill:#000;}';
      }

      if ('corsobrancelha' in dataDoc && dataDoc.corsobrancelha != 'false') {
        if (dataDoc.corsobrancelha.includes('#')){
          html += '.sobrancelha-class-1 { fill:' + dataDoc.corsobrancelha + ';}';
        }
      }else{
        html += '.sobrancelha-class-1 {fill:#000;}';
      }

      if ('corolho' in dataDoc && dataDoc.corolho != 'false') {
        if (dataDoc.corolho.includes('#')){
          html += '.olho-class-3 { fill:' + dataDoc.corolho + ';}';
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
      
      if ('corpo' in dataDoc && dataDoc.corpo != 'false') {
        html += dataCraftArray.element[dataDoc.corpo].dataPreview;
      }
      if ("cabelo" in dataDoc && dataDoc.cabelo != "false") {
        html += dataCraftArray.element[dataDoc.cabelo].dataPreview;
      }
      if ("sobrancelha" in dataDoc && dataDoc.sobrancelha != "false") {
        html +=
          dataCraftArray.block.preview.sobrancelha +
          dataCraftArray.element[dataDoc.sobrancelha].data +
          dataCraftArray.block.preview.blockOut;
      }
      if ("olho" in dataDoc && dataDoc.olho != "false") {
        html +=
          dataCraftArray.block.preview.olho +
          dataCraftArray.element[dataDoc.olho].data +
          dataCraftArray.block.preview.blockOut;
      }
      if ("nariz" in dataDoc && dataDoc.nariz != "false") {
        html +=
          dataCraftArray.block.preview.nariz +
          dataCraftArray.element[dataDoc.nariz].data +
          dataCraftArray.block.preview.blockOut;
      }
      if ("boca" in dataDoc && dataDoc.boca != "false") {
        html +=
          dataCraftArray.block.preview.boca +
          dataCraftArray.element[dataDoc.boca].data +
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
      buttonEdit.addEventListener("click", function () {
        window.sessionStorage.setItem("craftArtsId", doc.id);
        window.sessionStorage.setItem("corpele", dataDoc.corpele || false);
        window.sessionStorage.setItem("corcabelo", dataDoc.corcabelo || false);
        window.sessionStorage.setItem("corsobrancelha", dataDoc.corsobrancelha || false);
        window.sessionStorage.setItem("corolho", dataDoc.corolho || false);
      
        window.sessionStorage.setItem("corpo", dataDoc.corpo || false);
        window.sessionStorage.setItem("cabelo", dataDoc.cabelo || false);
        window.sessionStorage.setItem("sobrancelha", dataDoc.sobrancelha || false);
        window.sessionStorage.setItem("olho", dataDoc.olho || false);
        window.sessionStorage.setItem("nariz", dataDoc.nariz || false);
        window.sessionStorage.setItem("boca", dataDoc.boca || false);

        location.href = "preview.html";
      });

      const buttonDelete = document.createElement("button");
      buttonDelete.classList.add("myCraft-item-btn-delete");
      buttonDelete.classList.add("btn");
      buttonDelete.classList.add("btn-danger");
      buttonDelete.classList.add("rounded-circle");
      buttonDelete.innerHTML = '<i class="bi bi-trash-fill"></i>';
      buttonDelete.addEventListener("click", function () {
        deleteCraft(doc.id);
      });

      const divBody = document.createElement("div");
      divBody.classList.add("card-body");
      
      const div = document.createElement("div");
      div.classList.add("myCraft-item");
      div.classList.add("me-2");
      div.classList.add("mb-2");
      div.classList.add("card");
      div.classList.add("col-md-3");

      div.appendChild(img_svg);
      
      divBody.appendChild(buttonEdit);
      divBody.appendChild(buttonDelete);
      
      div.appendChild(divBody);
      document.getElementById("myCraft").appendChild(div);
    });
  })
  .catch((error) => {
    console.log("Erro no login: ", error);
    alertCraft("Erro");
  });
