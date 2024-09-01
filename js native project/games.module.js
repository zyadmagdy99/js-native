let MMORPG = document.querySelector("#MMORPG")
let SHOOTER = document.querySelector("#SHOOTER")
let SAILING = document.querySelector("#SAILING")
let PERMADEATH = document.querySelector("#PERMADEATH")
let SUPERHERO = document.querySelector("#SUPERHERO")
let PIXEL = document.querySelector("#PIXEL")
// let unit = document.querySelector("#unit")
import * as zoz from "./index.js"
import { display } from "./ui.module.js"
export class games {
    constructor(id) {
 this.id = id;
}

async getgames(){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '37a9d68e78msh52b1ca76567b9b6p12992ajsn61b91ed5f0a3',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.id}`;


   let games =await fetch(url, options)
   let response = await games.json()
   display(response)
}
}
const myGames = new games('MMORPG');
myGames.getgames();
