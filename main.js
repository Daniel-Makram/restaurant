


// const main = document.querySelector('main');
// document.querySelector('main').innerHTML = '';

// let jours = [ 'Dim', 'Lun', 'Mar', 
// 'Mer', 'Jeu', 'Ven', 'Sam' ];

// const horaire = [
//     { //Lundi
//         jour: jours[1],
//         ouverture1: 11,
//         fermeture1: 14,
//         ouverture2: 18,
//         fermeture2: 22,
//     },
//     { //Mardi
//         jour: jours[2],
//         ouverture1: 11,
//         fermeture1: 15,
//         ouverture2: 18,
//         fermeture2: 22,
//     },
//     { //Mercredi
//         jour: jours[3],
//         ouverture1: 11,
//         fermeture1: 14,
//         ouverture2: 18,
//         fermeture2: 22,
//     },
//     { //Jeudi
//         jour: jours[4],
//         ouverture1: 11,
//         fermeture1: 14,
//         ouverture2: 18,
//         fermeture2: 22,
//     },
//     { //Vendredi
//         jour: jours[5],
//         ouverture1: 11,
//         fermeture1: 14,
//         ouverture2: 18,
//         fermeture2: 22,
//     },
//     { //Samedi
//         jour: jours[6],
//         ouverture1: 11,
//         fermeture1: 14,
//         ouverture2: 18,
//         fermeture2: 22,
//     },
//     { //Dimanche
//         jour: jours[0],
//         ouverture: 11,
//         fermeture: 14,
//     },
// ]


// let today = new Date
// for (let element of horaire) {
//     const joursTous = document.createElement('div')
//     if ( jours[6] == jours[today.getDay()] || jours[0] == jours[today.getDay()]) {
//         let heure = today.getHours();
//         if (heure >= element.ouverture && heure <= element.fermeture) {
//             joursTous.style = 'color: green;'
//         }
//         else {
//             joursTous.style = 'color: red;'
//         }
//     }
//     else if (element.jour == jours[today.getDay()] ) {
//         let heure = today.getHours();
//         if (heure >= element.ouverture1 && heure < element.fermeture1 || heure >= element.ouverture2 && heure < element.fermeture2) {
//             joursTous.style = 'color: green;'
//         }
//         else {
//             joursTous.style = 'color: red;'
//         }
//     }
//     main.appendChild(joursTous)

//     const jour = document.createElement('p')
//     jour.textContent = element.jour
//     joursTous.appendChild(jour)

//     if (element.jour == 'Dim') {
//         const heureDebut = document.createElement('p')
//         heureDebut.textContent = element.ouverture +":30 "+ element.fermeture +":00"
//         joursTous.appendChild(heureDebut)
//     }
//     else{
//         const heureDebut = document.createElement('p')
//         heureDebut.textContent = element.ouverture1 +":30 "+ element.fermeture1 +":00"
//         joursTous.appendChild(heureDebut)
//         const heureFin = document.createElement('p')
//         heureFin.textContent = element.ouverture2 +":00 "+ element.fermeture2 +":30"
//         joursTous.appendChild(heureFin)
//     }
// }