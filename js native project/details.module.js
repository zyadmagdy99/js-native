
let bigunit = document.querySelector("#bigunit")
let sec1=document.getElementById("home")
let sec2=document.getElementById("sec22")
import * as zoz from "./games.module.js"


export class details {
    constructor(id) {
 this.id = id;
}

async getdetails(){

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '37a9d68e78msh52b1ca76567b9b6p12992ajsn61b91ed5f0a3',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let  details =await fetch(url, options)
  let response = await details.json()
 dis(response)
}
 
}




bigunit.addEventListener("click",async function(e) {
    if (e.target.closest('.unit')) {
        
        let id = e.target.closest('.unit').getAttribute('data-id');
       await dis(id)
        sec1.classList.replace("d-block","d-none")
        sec2.classList.replace("d-none","d-block")
    }

  
});



async function dis(id)
{
    
    

   var box= `
         <div class="container-fluid kk mt-5">
    <div class="d-flex justify-content-between mt-5">
      <div class="h1 text-white mt-5">Details Game</div>
      <div>
        <i class="fa-solid fa-x fs-1" id="xx" style="color: #acafb4;"></i>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="detimg mt-5">
               <img src="${id.thumbnail}" alt="">

        </div>
        
      </div>
      <div class="col-md-8 d-flex flex-column">
        <h1 class="text-white fw-bold mt-5 ">Title: ${id.title}
        </h1>
        <p class="text-white h4 mt-4">Category: ${id.genre}
        </p>
        <p class="text-white  h4 mt-3">Platform: ${id.platform}
        </p>
        <p class="text-white h4 mt-3">Status: Live
        </p>
        <p class="text-white fs-5 mt-2">${id.description}</p>
        <button class=" btn btn-outline-dark w-25 fs-5 text-info fw-bold border-info" id="btn">show games</button>
      </div>
    </div>
  </div>
        `
    
    document.getElementById("sec22").innerHTML=box;
    let close=document.getElementById("xx")

    close.addEventListener("click",async function() {
    

      sec2.classList.replace("d-block","d-none")
      sec1.classList.replace("d-none","d-block")     
     
     });
     let btn=document.getElementById("btn")
     btn.addEventListener("click",async function() {

      window.location.href = `${id.game_url}`;


     })

    }

