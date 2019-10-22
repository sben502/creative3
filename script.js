/*global Vue*/
var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleString();

let app = new Vue({
  el: '#app',
  data: {
    number:0,
    addedName: '',
    addedComment: '',
    comments: {
      time: ''
    },
  },
  methods: {
     addComment() {
    Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({
        author: this.addedName,
        text: this.addedComment,
        time:moment().format('MMMM Do YYYY, h:mm:ss a')
      });
      this.addedName = '';
      this.addedComment = '';
    },
  },
});

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
    var id = "<p> Meal ID: ";
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
            youtubeLink += json.meals[i].strYoutube + ">Youtube Video For Making This Meal</a><br>";
            source += json.meals[i].strSource + ">Click Here for Ingredients, Measurements, and More Information</a>";
            id +=json.meals[i].idMeal + "</p>";
        }
        document.getElementById('name').innerHTML = name;
        document.getElementById('catMeal').innerHTML = category;
        document.getElementById('area').innerHTML = area;
        document.getElementById('image').innerHTML = image;
        document.getElementById('instructions').innerHTML = instructions;
        document.getElementById('source').innerHTML = source;
        document.getElementById('youtube').innerHTML = youtubeLink;
        document.getElementById('idMeal').innerHTML = id;
        
    });
};