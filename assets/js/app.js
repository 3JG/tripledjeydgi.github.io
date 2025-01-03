const craft_user_logger = window.sessionStorage.getItem("craft_user_logger");
if (craft_user_logger) {} else {
  window.sessionStorage.setItem("craft_user_logger", "COISA");
}

function salveCraft() {
  if (document.getElementById("name").value) {
  const idUser = window.sessionStorage.getItem("craft_user_logger") || false;
  
  window.sessionStorage.setItem("craftArtsId", document.getElementById("name").value);

  const id = document.getElementById("name").value;
  const corpo = window.sessionStorage.getItem("corpo");
  const cabelo = window.sessionStorage.getItem("cabelo");
  const sobrancelha = window.sessionStorage.getItem("sobrancelha");
  const olho = window.sessionStorage.getItem("olho");
  const nariz = window.sessionStorage.getItem("nariz");
  const boca = window.sessionStorage.getItem("boca");

  const corpele = window.sessionStorage.getItem("corpele");
  const corcabelo = window.sessionStorage.getItem("corcabelo");
  const corsobrancelha = window.sessionStorage.getItem("corsobrancelha");
  const corolho = window.sessionStorage.getItem("corolho");

  const data = {
    idUser,
    id,
    corpo,
    cabelo,
    sobrancelha,
    olho,
    nariz,
    boca,
    corpele,
    corcabelo,
    corsobrancelha,
    corolho,
  };

  console.log(data)

  const url = 'https://script.google.com/macros/s/AKfycbwBOP0dGFn5D-Z5mO_SKXNo0h4kkmtIoAHoONK4Sf5gB9D4QfmFOrVfbyq2NHYVBoKABw/exec';

  fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .finally(() => {
      console.log("Foi")
  });
  alertCraftRedirect("Craft Salvo com sucesso!", "myCrafts.html");
} else {
  alertCraft("Nome Obrigatório");
}
}

function getNameCraft() {
  if (window.sessionStorage.getItem("craft_user_name")) {
    return window.sessionStorage.getItem("craft_user_name");
  }
  return "";
}

function alertCraft( message ) {
  const modal = document.getElementById('CraftModal');
  modal.classList.remove("block-modal");
  if (modal) {
    modal.addEventListener('show.bs.modal', function (event) {
      const title = modal.querySelector('.modal-body');
      title.innerHTML = message;
    });

    modal.addEventListener('click', function (event) {
      const button = modal.querySelector('#ok');
      button.click();
    });

    var myModal = new bootstrap.Modal(document.getElementById('CraftModal'));
    myModal.show();
  }
}

function alertCraftRedirect( message, redirect ) {
  const modal = document.getElementById('CraftModal');
  if (modal) {
    modal.addEventListener('show.bs.modal', function (event) {
      const title = modal.querySelector('.modal-body');
      title.innerHTML = message;

      const button = modal.querySelector('#ok');
      button.addEventListener('click', function (event) {
        location.href = redirect;
      });
    });

    var myModal = new bootstrap.Modal(document.getElementById('CraftModal'));
    myModal.show();
  }
}