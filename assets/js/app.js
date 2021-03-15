// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB89Q0zZoegIQ89li-FQ9wwwugyHng59p4",
  authDomain: "projetocrud-abcad.firebaseapp.com",
  projectId: "projetocrud-abcad",
  storageBucket: "projetocrud-abcad.appspot.com",
  messagingSenderId: "124181371095",
  appId: "1:124181371095:web:0f447fababa039ea97f892",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const craft_user_logger = window.sessionStorage.getItem("craft_user_logger");
if (craft_user_logger) {
  document.querySelectorAll(".item-not-log").forEach(function (element) {
    element.remove();
  });
} else {
  document.querySelectorAll(".item-log").forEach(function (element) {
    element.remove();
  });
}

function salveCraft() {
  const idUser = window.sessionStorage.getItem("craft_user_logger") || false;

  const id = window.sessionStorage.getItem("craftArtsId") || false;
  const cabelo = window.sessionStorage.getItem("cabelo");
  const sombrancelha = window.sessionStorage.getItem("sombrancelha");
  const olho = window.sessionStorage.getItem("olho");
  const nariz = window.sessionStorage.getItem("nariz");
  const boca = window.sessionStorage.getItem("boca");

  if (idUser) {
    if (id) {
      db.collection("craftArts")
        .doc(id)
        .update({
          idUser,
          cabelo,
          sombrancelha,
          olho,
          nariz,
          boca,
        })
        .then(() => {
          alert("Craft Editado com sucesso!");
        });
    } else {
      db.collection("craftArts")
        .add({
          idUser,
          cabelo,
          sombrancelha,
          olho,
          nariz,
          boca,
        })
        .then(() => {
          alert("Craft Salvo com sucesso!");
        });
    }
  } else {
    alert("Efetue o login");
  }
}

function saveDataRegister() {
  const nome = document.querySelector("input#nome").value;
  const email = document.querySelector("input#email").value;
  const password = document.querySelector("input#password").value;

  db.collection("craftUsers")
    .add({
      nome,
      email,
      password,
    })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      location.href = "login.html";
    });
}

function logDataUser() {
  const email = document.querySelector("input#email").value;
  const password = document.querySelector("input#password").value;

  db.collection("craftUsers")
    .where("email", "==", email)
    .where("password", "==", password)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        window.sessionStorage.setItem("craft_user_logger", doc.id);
        window.sessionStorage.setItem("craft_user_name", doc.data().nome);
        alert("Seja Bem vindo!");
        location.href = "index.html";
      });
    })
    .catch((error) => {
      Alert("Erro no login: ", error);
    });
}

function getNameCraft() {
  if (window.sessionStorage.getItem("craft_user_name")) {
    return window.sessionStorage.getItem("craft_user_name");
  }
  return "";
}

function logout() {
  window.sessionStorage.removeItem("craft_user_logger");
  window.sessionStorage.removeItem("craft_user_name");

  alert("Tchau até a próxima");
  location.href = "index.html";
}

function deleteCraft(id) {
  db.collection("craftArts")
    .doc(id)
    .delete()
    .then(() => {
      alert("Craft apagado com sucesso!");
      location.href = "myCrafts.html";
    })
    .catch((error) => {
      alert("Erro ao deletar: ", error);
    });
}
