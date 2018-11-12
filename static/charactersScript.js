new Vue({
  el: '#list',
  data: {
    characters: [{
        job: "detektyw",
        name: "Jass Anderson",
        sex: "Kobieta",
        age: "34"
      },
      {
        job: "lekarz",
        name: "Andrew",
        sex: "Mężczyzna",
        age: "41"
      },
      {
        job: "aktorka",
        name: "Izabell",
        sex: "Kobieta",
        age: "25"
      },
    ]
  },
  methods: {
    getCharacters() {
      this.$http.get('/api/characters/', {
        responseType: 'Object'
      }).then(response => {
        console.log("Udany GET");
        for (c of response.body) {
          this.characters.push({
            'job': `${c.occupation}`,
            'name': `${c.name}`,
            'sex': `${c.sex}`,
            'age': `${c.age}`
          });
        }
      }, response => {
        console.log("Error")
      })
    }
  },
  beforeMount(){
   this.getCharacters()
  },
});
