var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleString();



/* global fetch*/
document.getElementById('button').onclick = function() {
    var url = "https://www.themealdb.com/api/json/v1/1/random.php";
    var name = "<br> <h2><strong>";
    var category = "<p> Food Category: ";
    var area = "<p> Culture: ";
    var image = "<img src=";
    var instructions = "<p> <br> Follow Instructions Below: <br>";
    var youtubeLink = "<a href=";
    var source = "<a href=";
       fetch(url)
    .then(function(reponse){
        return reponse.json();
    })
    .then(function(json){
        console.log(json);
        for (let i = 0; i < json.meals.length; i++){
            name += json.meals[i].strMeal + "</strong><h2>";
            category += json.meals[i].strCategory + "</p>";
            area += "<i>" + json.meals[i].strArea + "</i></p>";
            image += json.meals[i].strMealThumb + ">";
            instructions += json.meals[i].strInstructions + "</p>";
            youtubeLink += json.meals[i].strYoutube + ">Youtube Video For Making This Meal</a>";
            source += json.meals[i].strSource + ">Click Here for Ingredients, Measuremnts, and More Information</a>";
        }
        document.getElementById('name').innerHTML = name;
        document.getElementById('catMeal').innerHTML = category;
        document.getElementById('area').innerHTML = area;
        document.getElementById('image').innerHTML = image;
        document.getElementById('instructions').innerHTML = instructions;
        document.getElementById('source').innerHTML = source;
        document.getElementById('youtube').innerHTML = youtubeLink;
        
    });
    
    
};
