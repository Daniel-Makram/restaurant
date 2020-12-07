const contact = document.querySelector("body > section > form > div")


const formulaire = [{
        name: 'Nom',
        regex: [/^[A-Z][A-Za-z\é\è\ê\ë\-]+$/gi],
        placeholder: "Nom",
        type: 'text',
    },
    {
        name: 'Email',
        regex: [/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/],
        placeholder: "adresse@gmail.com",
        type: 'email',
    },
    {
        name: 'Message',
        placeholder: 'Ton message',
        type: 'text',
    },
]






let inputModif = document.getElementsByClassName("input");
let labelModif = document.getElementsByClassName("label");



inputModif[0].addEventListener('focusin', function() {
    labelModif[0].classList.add('modifLabel')
    if(this.value == true){
    labelModif[0].classList.toggle("modifLabel")}
})
inputModif[1].addEventListener('focusin', function() {
    labelModif[1].classList.add('modifLabel')
    if(this.value == true){
    labelModif[1].classList.toggle("modifLabel")}
})
inputModif[2].addEventListener('focusin', function() {
    labelModif[2].classList.add('modifLabel')
    if(this.value == true){
    labelModif[2].classList.toggle("modifLabel")}
})
inputModif[0].addEventListener('focusout', function() {
    if(this.value == false){
    labelModif[0].classList.toggle("modifLabel")}
})
inputModif[1].addEventListener('focusout', function() {
    if(this.value == false){
    labelModif[1].classList.toggle("modifLabel")}
})
inputModif[2].addEventListener('focusout', function() {
    if(this.value == false){
    labelModif[2].classList.toggle("modifLabel")}
})