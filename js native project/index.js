export async function getgames(){
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '37a9d68e78msh52b1ca76567b9b6p12992ajsn61b91ed5f0a3',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';


   let games =await fetch(url, options)
   let response = await games.json()
   console.log(response);


}

export async function getdetails(){

    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '37a9d68e78msh52b1ca76567b9b6p12992ajsn61b91ed5f0a3',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    let  details =await fetch(url, options)
  let response = await details.json()



}
 
