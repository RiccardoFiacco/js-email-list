//FUCTIONS
function createEmail(callback) {
  let email = "";
  let emails = [];

  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail") //vado a mandare una request
      .then((result) => { // Questo codice qui viene eseguito QUANDO la chiamata ha ricevuto la risposta e il thread principale è libero
        email = result.data.response;
        callback(email);
      })
      .catch((err) => console.log(err));
  }
  return emails;
}

//MAIN CODE
button.addEventListener("click", (event) => {
  event.preventDefault();

  app = createEmail((email) => {
    const el = document.createElement('p');
    el.innerHTML += email;
    printOnW.appendChild(el);
  });
  printOnW.innerText = " ";
});
