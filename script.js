/* global Vue*/
var app = new Vue({
  el: '#app',
  data: {
    number:0,
    addedName: '',
    addedComment: '',
    comments: {
    time: '',
    name:'',
    catMeal:'',
    area:'',
    image:'',
    instructions:'',
    source:'',
    youtube:'',
    idMeal:''
    },
  },
  methods: {
      
      async fetchREST() {
        try {
          console.log("In Fetch ");
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
          this.name = {name: meal[i].strMeal};
          this.catMeal = {catMeal: meal[i].strCategory};
          this.area = {area: meal[i].strArea};
          this.image = {image: meal[i].strMealThumb};
          this.instructions = {instructions: meal[i].strInstructions}; 
          this.source = {source: meal[i].strSource};
          this.youtube = {youtube: meal[i].strYoutube};
          this.idMeal = {idMeal: meal[i].strIdmEAL};
          console.log("Got Meal");
          } catch (error) {
            console.log(error);
          }
        },
    addComment() {
    Vue.set(app.comments, number, new Array);
      this.comments[number].push({
        author: this.addedName,
        text: this.addedComment,
        time:moment().format('MMMM Do YYYY, h:mm:ss a')
      });
      this.addedName = '';
      this.addedComment = '';
    },
  },
});
var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleString();

/* global fetch*/
/*document.getElementById('button').onclick = function() {
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
*/