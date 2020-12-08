
// -------------------- LOGO PAGE D'ACCUEIL------------
const logo = document.querySelector('.logo')

logo.addEventListener('click', function(){
    let top = document.querySelector('body');
    window.scrollTo(0, top.offsetTop)
})

// ----------------------FORMULAIRE ---------------------
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

// --------------------HORAIRE & LOCALISATION-------------------------


(function () {
    var setting = {
        "height": 500,
        "width": 500,
        "zoom": 17,
        "queryString": "Cantersteen 10, 1000 Brussels, Belgique",
        "place_id": "ChIJHacLzn_Ew0cRsNN0o2hHYy8",
        "satellite": false,
        "centerCoord": [50.84531426950266, 4.357355750000025],
        "cid": "0x2f634768a374d3b0",
        "lang": "fr",
        "cityUrl": "/belgium/brussels",
        "cityAnchorText": "Carte de Bruxelles, Flanders, Belgique",
        "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
        "embed_id": "322384"
    };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=322384';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();

