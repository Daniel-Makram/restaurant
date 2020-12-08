 //TODO
 //add red colors when time is wrong
 function SetTime() {
     let date = new Date();
     let time = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
     document.querySelector('.order--timer').textContent = time;
     // console.log('updated at',time)
     setTimeout(SetTime, 60000);
 }
 SetTime();


 let searchbar = document.querySelector('.searchbar--input')


 searchbar.onkeyup = function myFunction() {
     let ul = document.querySelector(".myUL");
     let li = ul.getElementsByTagName("li");
     let regExp = new RegExp(searchbar.value, "gi")

     console.log(regExp);
     for (i = 0; i < li.length; i++) {
         if (li[i].innerHTML.indexOf(searchbar.value) > -1) {
             console.log(regExp);
             // if(li[i].innerHTML.match(regExp)){
             li[i].style.display = "";
             //  console.log(li[i].innerHTML, 'FOUND')
         } else {
             li[i].style.display = "none";

         }
     }
 }

 function addToCart(newOrder,orderCount) {
     if(!orderCount){orderCount=1}
     let cart = document.querySelector('.order__cart--list');
     let li=cart.getElementsByTagName('li');
     let isNewOrder;
     let orderToAdd;
     for (i = 0; i < li.length; i++){

         if (li[i].innerText==(newOrder)) {
             isNewOrder=false;
             orderToAdd=i;
             i=li.length;
         } else {
            isNewOrder=true;
         }
     }
     if(isNewOrder){
        let newLi = document.createElement('li');
        newLi.innerHTML = newOrder + 'x'+orderCount;
        cart.appendChild(newLi);
     }else{
         li[orderToAdd].innerHTML=newOrder+'x'+orderCount+1;
     }
 }
 addToCart('pizza',1);
 addToCart('pizza',1);