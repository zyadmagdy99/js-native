

let sec1=document.getElementById("home")
let sec2=document.getElementById("sec22")


let bigunit = document.querySelector("#bigunit")

import {games} from "./games.module.js"
import { details } from "./details.module.js"

let navs = document.querySelectorAll(".nav-link");

navs.forEach(nav => {
    nav.addEventListener("click", function() {
        navs.forEach(item => item.classList.remove("active")); 
        this.classList.add("active");
    });
});

MMORPG.addEventListener("click",async function(){
    let mmorpg = new games("MMORPG")
    let gamesList = await mmorpg.getgames();
    display(gamesList)

})
SHOOTER.addEventListener("click",async function(){
    let SHOOTER = new games("SHOOTER")
    let gamesList = await SHOOTER.getgames();
    display(gamesList)


})
SAILING.addEventListener("click",async function(){
    let SAILING = new games("SAILING")
    let gamesList = await SAILING.getgames();
    display(gamesList)


})
PERMADEATH.addEventListener("click",async function(){
    let PERMADEATH = new games("PERMADEATH")
    let gamesList = await PERMADEATH.getgames();
    display(gamesList)


})
SUPERHERO.addEventListener("click",async function(){
    let SUPERHERO = new games("SUPERHERO")
    let gamesList = await SUPERHERO.getgames();
    display(gamesList)

})
PIXEL.addEventListener("click",async function(){
    let PIXEL = new games("PIXEL")
    let gamesList = await PIXEL.getgames();
    display(gamesList)

})




export async function display(gamesList)
{
    
    

   var box=``;
    for(let i=0;i<gamesList.length;i++)
        {
          
            
        box += `
         <div  class="col-2 unit mt-4 me-5" data-id="${gamesList[i].id}">
        <div class="gamepic">
          <img src="${gamesList[i].thumbnail}" class="w-100" alt="">
        </div>
        <div class="gamename d-flex justify-content-between mt-3">
          <div class="nm fw-bold text-white fs-4">${gamesList[i].title}</div>
          <div class="free text-white fs-4 text-center rounded-5">free</div>
        </div>
        <div class="gamedetails fs-5 border-bottom border-black mt-3">${gamesList[i].short_description}</div>
        <br>
        <div class="gametypec d-flex justify-content-between align-items-center">
          <div class="mmm text-white rounded-5 d-flex justify-content-center align-items-center">${gamesList[i].genre}</div>
          <div class="mm text-white rounded-5 d-flex justify-content-center align-items-center">${gamesList[i].platform}</div>

        </div>
      </div>
        `
    }
    document.getElementById("bigunit").innerHTML=box;

    bigunit.addEventListener("click",async function(e) {
        if (e.target.closest('.unit')) {
            
            let id = e.target.closest('.unit').getAttribute('data-id');
            displaydetails(id)
            

            sec1.classList.replace("d-block","d-none")
            sec2.classList.replace("d-none","d-block")
        }

       
      



    });

   
}



async function displaydetails(id){

    let detail = new details(id)
    let info =detail.getdetails()

}
