window.onload =init()
const meals = document.getElementById('meals');
const heading = document.getElementById('result-heading');
function init(){
    const search = document.getElementById('search');
    const submit = document.getElementById('submit');
    const random = document.getElementById('random');
    const resultHeading = document.getElementById('result-heading');
    const single_mealEl = document.getElementById('single-meal');
    const input_data = document.getElementById('input-field');
    random.addEventListener('click',()=>{
        let query = input_data.value;
        getData(query);  
    })
   
    search.addEventListener('click',()=>{
        let query = input_data.value;
        
        if(query === ""){
            heading.innerHTML=`<h1 class="hading-res">Enter somthing to search</h1>`;
        }
        else{
            heading.innerHTML=`<h1 class="hading-res">Search result for \"${query}\"</h1>`;
            getData(query);
        }
        
    })


}
//get data from api
function getData(query){
    console.log( query)
    let url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(url).then(data=> data.json()).then(data=>
        // console.log(data)); 
        showData(data));
}

function showData(data){
    let x = [];
    x=data.meals;
    for(let i=0;i<x.length;i++){
        let img_link = x[i].strMealThumb;
        console.log(x[i]);
        meals.innerHTML += `<div class="item"><img src="${img_link}"><div class="overlay"><h3 class="item-name">${x[i].strMeal}</h3></div></div>`
    }
}




