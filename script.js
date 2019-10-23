/* global Vue*/
var app = new Vue({
  el: '#app',
  data: {
      current:{},
    showLinks: false,
    number:0,
    addedName: '',
    addedComment: '',
    comments: {
    time: '',
    },
  },
  created:{
    getTime(){
      this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
      return this.time;
    }
  },
  methods: {
  async fetchREST() {
    try {
      this.showLinks = true;
      console.log("In Fetch ");
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      this.current = response.data.meals[0];
      console.log("Got Meal");
      } catch (error) {
        console.log(error);
      }
    },
  async addComment() {
    if (!(this.number in this.comments))
      Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({
      author: this.addedName,
      text: this.addedComment,
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
      });
      this.addedName = '';
    this.addedComment = '';
      },
    },
});

var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleString();