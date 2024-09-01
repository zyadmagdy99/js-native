let find=document.getElementById("findd")
let citty=document.getElementById("cityy")
let tempp=document.getElementById("temp")
let conditionn=document.getElementById("condition")
let rainn=document.getElementById("rain")
let windkk=document.getElementById("windk")
let winddd=document.getElementById("windd")
let img =document.getElementById("sun")
let times =document.getElementById("time")
let satur =document.getElementById("sat")
let month =document.getElementById("mon")
let next =document.getElementById("nd")

find.addEventListener("input",function(){

    get(find.value)
})

async function get(city){
   let result =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8468bee53dfc454696e93530242306&q=${city}`,{
        method:"GET",
        headers:{"content-type":"application/json"}
        
    })
    let data=await result.json()
    
   console.log(data.forecast.forecastday[0].date);
    let dayOfweek= getDayOfWeek(data.forecast.forecastday[0].date)  
    let dayOfweek2= getDayOfWeek2(data.forecast.forecastday[0].date)  

    display(data.location.name,
        data.current.temp_c,
        data.current.condition.text,
        data.forecast.forecastday[0].day.daily_chance_of_rain,
        data.current.wind_kph,
        data.current.wind_dir,
        data.current.condition.icon,
        dayOfweek,
        dayOfweek2,
        
    )

}
 function getDayOfWeek(dateString) {
    
    const date = new Date(dateString);
    const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return dayOfWeek[date.getDay()];

}

 function getDayOfWeek2(dateString) {
    
    const date = new Date(dateString);
   let time= date.toDateString()
   let last=time.split(' ')
   return last[2]+last[1];

}




 function display (city,temp,condition,rain,windk,windd,sun,date,date2){

  citty.innerHTML=city
  tempp.innerHTML=temp +'°C';
  conditionn.innerHTML=condition
  rainn.innerHTML=rain +'%'
  windkk.innerHTML=windk +' kph'
  winddd.innerHTML=windd
  img.src=sun
  satur.innerHTML=date
  month.innerHTML=date2
 }



 