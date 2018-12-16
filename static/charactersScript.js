function getCookie(cookiename) {
  var cookiestring = RegExp(""+cookiename+"[^;]+").exec(document.cookie);
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

new Vue({
  el: '#content',
  data: {
    characters: []
  },
  methods: {
    printCharacter(index) {
      var id = this.characters[index].id;
      var file_name = this.characters[index].name + '_' + this.characters[index].job + '_ZewCthulhu.pdf';
      var url = '/api/characters/' + id + '/sheet';
      this.$http.get(url, {
        responseType: 'blob'
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', file_name);
        document.body.appendChild(link);
        w = window.open(link);
      })
    },
    deleteCharacter(index) {
      var id = this.characters[index].id;
      console.log(id);
      this.$http.delete('/api/characters/'+ id, {
        responseType: 'Object',
        headers: {"X-CSRFToken": getCookie("csrftoken")},
      })
        .then((response) => {
          console.log("Deleted character");
          this.characters.splice(index, 1);
        }, response => {
          console.log("Error deleting character")
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
