//FUCTIONS
function createEmail(){
    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail") //vado a mandare una request
    .then((result=>{
        
    }))
    .catch((err)=>console.log(err))

}

//MAIN CODE
button.addEventListener("click", (event)=>{
    event.preventDefault();
    createEmail();
})