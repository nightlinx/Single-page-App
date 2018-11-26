new Vue({
  el: '#content',
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
    deleteCharacter(index) {
      var id = this.characters[index].id;
      console.log(id);
      this.$http.delete('/api/characters/'+ id)
        .then((response) => {
          console.log("Deleted character");
          this.characters.splice(index, 1);
        });
      },
    getCharacters() {
      this.$http.get('/api/characters/', {
        responseType: 'Object'
      }).then(response => {
        console.log("Udany GET");
        for (c of response.body) {
          this.characters.push({
            'id': `${c.id}`,
            'job': `${c.occupation}`,
            'name': `${c.name}`,
            'sex': `${c.sex}`,
            'age': `${c.age}`
          });
        }
      }, response => {
        console.log("Error")
      })
    },
  },
  beforeMount(){
   this.getCharacters()
  },
});
