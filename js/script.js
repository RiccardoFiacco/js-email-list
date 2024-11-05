//FUCTIONS
function createEmail(){
    let email = '';
    let emails = [];

    for(let i=0; i < 10; i++){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail") //vado a mandare una request
        .then((result=>{
            email = result.data.response;
            emails.push(email);
            console.log(emails);        
        }))
        .catch((err)=>console.log(err));
    }
    return emails;
}


//MAIN CODE
button.addEventListener("click", (event)=>{
    event.preventDefault();
    createEmail();

})