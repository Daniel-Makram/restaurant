const logo = document.querySelector('.logo')

logo.addEventListener('click', function(){
    let top = document.querySelector('body');
    window.scrollTo(0, top.offsetTop)
})


let inputModif = document.getElementsByClassName("input");
let labelModif = document.getElementsByClassName("label");
const patternName = /([a-z]+(-[ ]*)?)/gi
const patternEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/


const patternList = [patternName, patternEmail, patternName]

for (let i = 0; i < inputModif.length; i++) {
    inputModif[i].addEventListener('focusin', function () {
        labelModif[i].classList.add('modifLabel')
        if (this.value == true) {
            labelModif[i].classList.toggle("modifLabel")
        }
    })
}
for (let i = 0; i < inputModif.length; i++) {
    inputModif[i].addEventListener('focusout', function () {
        let inputValue = this.value || this.innerHTML
        if (inputValue == false) {
            labelModif[i].classList.toggle("modifLabel")
        }
        if(inputValue.match(patternList[i])){
            this.style.borderColor="green"
        }else if(inputValue == ''){
            this.style.borderColor="black"
        }
        else{
            this.style.borderColor="red"
        }
    })
}




