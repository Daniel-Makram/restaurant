 //TODO
 //add red colors when time is wrong
 function SetTime() {
     let date = new Date();
     let time = (date.getHours()+1) + ':' + (date.getMinutes() < 10 ? '0' : '') + (date.getMinutes());
    
     document.querySelector('.order--timer').textContent = time;
     // console.log('updated at',time)
     setTimeout(SetTime, 60000);
 }
 SetTime();


 let searchbar = document.querySelector('.searchbar--input')


 searchbar.onkeyup = function myFunction() {
     let regExp = new RegExp(searchbar.value, "gi")

     console.log(regExp);
     for (i = 1; i < 10; i++) {
         let textPath = document.querySelector("body > section > section > div > div:nth-child(" + i + ") > div > div > div > p")
         let divPath = document.querySelector("body > section  > section > div > div:nth-child(" + i);
         //  if (textPath.innerHTML.indexOf(searchbar.value) > -1) {
         console.log(regExp);
         if (textPath.innerHTML.match(regExp)) {
             divPath.style.display = "";
             //  console.log(li[i].innerHTML, 'FOUND')
         } else {
             divPath.style.display = "none";

         }
     }
 }

 const products = [{
         name: "Orientale",
         price: 12,
         itemCount: 1,
         description: "Pizza : Tomate, fromage, merguez, poivrons verts"
     },
     {
         name: "La Quatre Fromages",
         price: 12,
         itemCount: 1,
         description: "Pizza: Tomate, fromage, brie, gorgonzola, chèvre"
     }, {
         name: "La Napolitaine",
         price: 12,
         itemCount: 1,
         description: "Pizza: Tomate, fromage, anchois, câpres, olives"
     }, {
         name: "La Parmigiana",
         price: 12,
         itemCount: 1,
         description: "Pizza: Tomate, fromage, jambon de pays, aubergines"
     }, {
         name: "Spaghetti Bolognese ",
         price: 12,
         itemCount: 1,
         description: "Recette traditionnelle de la bolognaise"
     }, {
         name: "Spaghetti pomodoro ",
         price: 12,
         itemCount: 1,
         description: "Spaghetti avec de la roquette, des tomates cerise et un accompagnement divin"
     }, {
         name: "Gnocchi ",
         price: 12,
         itemCount: 1,
         description: "Gnocchi au parmesan accompagné de ses petits légumes"
     }, {
         name: "risotto ",
         price: 12,
         itemCount: 1,
         description: "Risotto traditionnel avec la recette passée de génération en générations"
     }, {
         name: "Tagliatelle ",
         price: 12,
         itemCount: 1,
         description: "Tagliatelle faites à la minute à la courgette et au citron"
     },
 ]




 const generateProduct = (item, productCount) => {

     let productContainer = document.createElement('div')
     productContainer.className = 'middle'

     let title = document.createElement('p')
     title.className = 'card-text text-light h3'
     title.innerText = products[productCount].name;

    //  let textContainer = document.createElement("div")
    //  textContainer.className = 'text'

    //  let price = document.createElement('p')
    //  price.innerText = 'Prix : ' + products[productCount].price

    //  let description = document.createElement('p')
    //  description.innerText = products[productCount].description

    //  textContainer.appendChild(price)
    //  textContainer.appendChild(description)
     productContainer.appendChild(title)
    //  productContainer.appendChild(textContainer)

     item.appendChild(productContainer)

 }
 let menuItem = document.querySelectorAll('.card-img-overlay')
 let productCount = 0
 for (item of menuItem) {
     generateProduct(item, productCount)
     productCount++
 }

 let cart = []

 const addToCart = (product) => {
     for (element of cart) {
         if (element[0] === product.name) {
             element[1] += 1
             displayCart(element, true)
             updatePrice()
             return
         }
     }
     cart.push([product.name, product.itemCount, product.price]);
     displayCart(product)
     updatePrice()
     //  console.table(cart)
 }

 function menuListener() {
     let menuItem = document.querySelectorAll('.middle');
     for (item of menuItem) {
         let currentProduct = item.querySelector('p').innerText
         item.addEventListener('click', function () {
             for (product of products) {
                 if (product.name.match(currentProduct)) {
                     addToCart(product);
                 }
             }
         })
     }
 }
 menuListener()

 const displayCart = (productToAdd, isDuplicate, isDeleting) => {
     let ul = document.querySelector('.order__cart--list')
     let li = ul.getElementsByTagName('li')
     if (isDuplicate) {
         for (i = 0; i < li.length; i++) {
             if (li[i].textContent == (productToAdd[0] + ' x ' + (productToAdd[1] - 1))) {
                 li[i].textContent = (productToAdd[0] + ' x ' + productToAdd[1])
             }
         }
         return
     }
    //  let btn = document.createElement('button')
    //  btn.className = 'minusOneItem'
    //  btn.innerText = 'ThrashBin'
     let newLi = document.createElement('li')
     newLi.textContent = productToAdd.name + ' x ' + productToAdd.itemCount
     let parent = document.createElement('div')
     parent.className = 'flex--row';
     parent.appendChild(newLi)
    //  parent.appendChild(btn)
     ul.appendChild(parent)
    //  deleteItem()
 }

 const updatePrice = () => {

     let result = document.querySelector('#totalPrice').innerText
     result = result.replace(/.+([0-9]+).+/, '$1');
     for (elem of cart) {
         result = Number(result)
         result += (elem[2] * elem[1]);
     }
     document.querySelector('#totalPrice').innerText = result + '€'
 }

//  const deleteItem = () => {
//      console.log('hi');
//      let deleteBtns = document.querySelectorAll('.minusOneItem')
//      for (deleteBtn of deleteBtns) {
//          deleteBtn.addEventListener('click', () => {
//              let productToDecrease = deleteBtn.previousSibling.textContent
//              let isDelete = false
//              let productToDelete;
//              let i=0
//              for (element of cart) {
//                  if (productToDecrease.match(element[0])) {
//                      let nbr = element[1] - 1
//                      if (nbr <= 0) {
//                          element[1]--
//                          isDelete = true
//                          productToDelete=i;
                         
//                      } else {
//                          element[1]--
//                          console.log(element[1]);
//                      }
//                      i++
//                  }
//              }
//              if(isDelete){
//                  console.log('todelete');
//                  console.table(cart[productToDelete])
//                 cart.splice(cart[productToDelete],1)
//                 console.table(cart);
//              }
//          })
//      }
//  }






const horaire = [{
    jour: 'weekday',
    heure1: 11.30,
    heure2: 14,
    heure3: 18,
    heure4: 22.30,
},
{
    jour: 0, ///(dimanche)
    heure1: 11.30,
    heure2: 15,
},
]

function newTime() {
let date = new Date();
let time = date.getHours() + '.' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

for (let element of horaire) {
    if (element.jour == date.getDay()) {
        if (Number(time) < element.heure2 && Number(time) > element.heure1) {  // entre 11h et 14h
            let openTime = document.querySelector("body > header > nav > div")
            openTime.textContent = 'Ouvert'
            openTime.style.color = "green"
        } else {
            let openTime = document.querySelector("body > header > nav > div")
            openTime.textContent = 'Fermé'
            openTime.style.color = "red"
        }

    } else if(element.jour != 0){  // semaine
        if ((Number(time) < element.heure2 && Number(time) > element.heure1) || (Number(time) < element.heure4 && Number(time) > element.heure3)) {
            let openTime = document.querySelector("body > header > nav > div")
            openTime.textContent = 'Ouvert'
            openTime.style.color = "green"
        } else{
            let openTime = document.querySelector("body > header > nav > div")
            openTime.textContent = 'Fermé'
            openTime.style.color = "red"
        }
    }
}
    // console.log('updated at',time)
    setTimeout(SetTime, 60000);
}
newTime();

const logo = document.querySelector('.logo')

logo.addEventListener('click', function () {
    let top = document.querySelector('body');
    window.scrollTo(0, top.offsetTop)
}) 