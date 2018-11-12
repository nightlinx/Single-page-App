new Vue({
  el: '#content',
  data: {
    explorerName: '',
    gamerName: '',
    explorerAge: '',
    explorerSex: '',
    explorerCity: '',
    explorerBirthCity: '',
    importantPlace: '',
    nature: '',
    importantPeople: '',
    job: '',
    sk: '',
    luckDraw: true,
    creditRatingDraw: true,
    wrongValuesMsg: false,
    wrongValuesMsg2: false,
    allJobs: [],
    allWeapons: ['Krótki nóż: 1K4', 'Broń krótka: 1K10', 'Maczeta: 1K8', "Mała pałka: 1K6"],
    allEquipment: ['Koc', 'Apteczka', 'Lampa naftowa', 'Zapałki', 'Lina', 'Butelka wina', 'Ołówek', 'Zeszyt', 'Torebka'],
    allSkills: [],
    interests: [],
    skills: [],
    weapons: [],
    equipment: [],
    info: true,
    attribute: false,
    pages: [true, false, false, false, false],
    appearancePages: [true, false, false, false, false],
    mainAttrValues: [{
      'value': 80
    }, {
      'value': 70
    }, {
      'value': 60
    }, {
      'value': 60
    }, {
      'value': 50
    }, {
      'value': 50
    }, {
      'value': 50
    }, {
      'value': 40
    }],
    mainSkillsValues: [{
      'value': 70
    }, {
      'value': 60
    }, {
      'value': 60
    }, {
      'value': 50
    }, {
      'value': 50
    }, {
      'value': 50
    }, {
      'value': 40
    }, {
      'value': 40
    }, {
      'value': 40
    }],
    mainAttr: [{
        name: 'Siła',
        value: 0
      },
      {
        name: 'Kondycja',
        value: 0
      },
      {
        name: 'Moc',
        value: 0
      },
      {
        name: 'Zręczność',
        value: 0
      },
      {
        name: 'Wygląd',
        value: 0
      },
      {
        name: 'Budowa ciała',
        value: 0
      },
      {
        name: 'Inteligencja',
        value: 0
      },
      {
        name: 'Wykształcenie',
        value: 0
      }
    ],
    jobSkills: [{
        name: []
      },
      {
        name: []
      },
      {
        name: []
      },
      {
        name: []
      },
      {
        name: []
      },
      {
        name: []
      },
      {
        name: []
      },
      {
        name: []
      },
      {
        name: []
      },
    ],
    mainSkills: [{
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
    ],
    appearance: [{
        name: "twarz",
        shapes: ['1', '2', '3'],
        colors: ['#FDCACA', '#F8D6C8', '#F8DFB9', '#D9BD92', '#73553F', '#3A2828']
      },
      {
        name: "nos i usta",
        shapes: ['1', '2', '3'],
        colors: ['#FED0B6', '#D66E6E', '#FF3E3E', '#B91B1B', '#4C1313', '#340916']
      },
      {
        name: "oczy",
        shapes: ['1', '2', '3'],
        colors: ['#9F9A1D', '#5C802E', '#5A9CC2', '#653818', '#3A2828', '#000000']
      },
      {
        name: "włosy",
        shapes: ['1', '2', '3'],
        colors: ['#EE6214', '#D5B17C', '#73553F', '#3A2828', '#1E1104', '#979696']
      },
    ],
    activeAppearance: {},
    svgSize: '250px',
    faceColor: '#F8D6C8',
    eyesColor: '#5C802E',
    lipsColor: '#D66E6E',
    faceShapes: [],
    leftEyeLids: [],
    rightEyeLids: [],
    upperLips: [],
    bottomLips: [],
    leftEyeLid: {},
    rightEyeLid: {},
    faceShape: {},
    upperLip: {},
    bottomLip: {},
    hairShape: 1,
    hairColor: 3,
    hairObjects: {},
    hair: {},
    postError: false,
    postSuccess: false,
  },
  computed: {
    magic: function() {
      return this.mainAttr[2].value / 5;
    },
    sanity: function() {
      return this.mainAttr[2].value;
    },
    damageBonusAndBuild: function() {
      var sum = this.mainAttr[0].value + this.mainAttr[5].value;
      if (sum <= 64) return ['-2', '-2'];
      if (sum <= 84) return ['-1', '-1'];
      if (sum <= 124) return ['Brak', '+1'];
      if (sum <= 164) return ['+1K4', '+1'];
      return ['+1K6', '+2'];
    },
    hitPoints: function() {
      var sum = this.mainAttr[1].value + this.mainAttr[5].value;
      return sum / 10;
    },
    luck: function() {
      // wykonuję 3 rzuty koścmi K6 i mnożę razy 5;
      var first = Math.floor(Math.random() * 6) + 1;
      var sec = Math.floor(Math.random() * 6) + 1;
      var third = Math.floor(Math.random() * 6) + 1;
      return (first + sec + third) * 5;
      //== return Math.floor(Math.random() * 90) + 15;
    },
    creditRating: function() {
      var a = Math.floor(Math.random() * 5) + 1;
      return a * this.mainSkills[8].value / 10;
    },
    strongPoints: function() {
      if (this.validateValues(this.mainAttr, this.mainAttrValues)) {
        var sp = [];
        for (var i = 0; i < this.mainAttr.length; i++) {
          if (this.mainAttr[i].value >= 70) {
            sp.push(this.mainAttr[i]);
          }
        }
        return sp;
      }
    },
    strongSkills: function() {
      if (this.validateValues(this.mainSkills, this.mainSkillsValues)) {
        var sp = [];
        for (var i = 0; i < this.mainSkills.length; i++) {
          if (this.mainSkills[i].value >= 60) {
            sp.push(this.mainSkills[i]);
          }
        }
        return sp;
      }
    },
    allInterests: function() {
      var mySkills = []
      for (s of this.mainSkills) {
        mySkills.push(s.name);
      }
      return this.allSkills.filter(function(i) {
        return mySkills.indexOf(i.name) < 0;
      })
    },
    facePaths() {
      const svgSize = this._data.svgSize;
      var Mx = this.faceShape.Mx;
      var My = this.faceShape.My;
      var rx = this.faceShape.rx;
      var ry = this.faceShape.ry;
      var x = this.faceShape.x;
      var d = `M ${Mx}, ${My}
             m -25, 0
             a ${rx},${ry} 0 1,0 ${x},0
             a ${rx},${rx} 0 1,0 -${x},0`;
      return {
        d
      }
    },
    eyelidsPaths() {
      var left = this.leftEyeLid;
      var right = this.rightEyeLid;

      var d =
        `M ${left.Mx}, ${left.My}
             C ${left.Cx1},${left.Cy1}
               ${left.Cx2},${left.Cy2}
               ${left.Cx},${left.Cy}

             M ${right.Mx}, ${right.My}
             C ${right.Cx1},${right.Cy1}
               ${right.Cx2},${right.Cy2}
               ${right.Cx},${right.Cy}`;
      return {
        d
      }
    },
    eyesPaths() {
      const svgSize = this._data.svgSize;
      var d = `M 106, 107
             a 3,3 0 1,0 -3,0

             M 147, 107
             a 3,3 0 1,0 -3,0`;
      return {
        d
      };
    },
    lipsPaths() {
      var up = this.upperLip;
      var down = this.bottomLip;
      var d =
        `M ${up.Mx}, ${up.My}
             C ${up.Cx1}, ${up.Cy1}
               ${up.Cx2}, ${up.Cy2}
               ${up.Cx}, ${up.Cy}

               C ${up.Cx2}, ${up.Cy2}
                 ${up.Cx1+20}, ${up.Cy1}
                 ${up.Mx+30}, ${up.My}

              M 110, 145
              h ${up.h}

              M ${down.Mx}, ${down.My}
              C ${down.Cx1}, ${down.Cy1}
                ${down.Cx2}, ${down.Cy2}
                ${down.Cx}, ${down.Cy}`;
      return {
        d
      };
    },
    nosePaths() {
      var d = `M 117, 127
             C 115, 132
             135, 132
             132, 127`;
      return {
        d
      };
    },
    brawnsPath() {
      var d =
        `   M 90, 92
                C 90, 92
                  105, 87
                  115, 97

                M 133, 97
                C 143, 87
                  158, 92
                  160, 92`;
      return {
        d
      };
    },
    hairShapeSrc: function() {
      return `../static/img/hair/${this.hairShape}${this.hairColor}.png`;
    },
  },
  watch: {
    face: function() {
      this.appearance[1].colors[0] = this.face;
    },
    weapons: function() {
      console.log('watch: waepons | ', this.weapons);
    },
    equipment: function() {
      console.log('watch: equipment | ', this.equipment);
    },
    interests: function() {
      console.log('watch: interests | ', this.interests);
    },
    magic: function() {
      console.log('watch: magic | ', this.magic);
    },
    sanity: function() {
      console.log('watch: sanity | ', this.sanity);
    },
  },
  methods: {
    switchToPage(pageIndex) {
      var vm = this;
      for (var i = 0; i < this.pages.length; i++) {
        vm.$set(vm.pages, i, false);
      }
      vm.$set(vm.pages, pageIndex, true);
      this.activeAppearance = this.appearance[0];
      if (pageIndex == 2) {
        this.getJobDetails();
        this.getSkillsDetails();
      }
      if (pageIndex == 4) {
        this.getAppearanceDetails();
      }
    },
    switchToElement(pageIndex) {
      var vm = this;
      for (var i = 0; i < this.appearancePages.length; i++) {
        vm.$set(vm.appearancePages, i, false);
      }
      vm.$set(vm.appearancePages, pageIndex, true);
      this.activeAppearance = this.appearance[pageIndex];
    },
    getAppearanceDetails() {
      this.$http.get('/api/appearance', {
        responseType: 'Object'
      }).then(response => {
        console.log(response.body.faces);
        this.faceShapes = response.body.faces;
        this.leftEyeLids = response.body.left_eyes;
        this.rightEyeLids = response.body.right_eyes;
        this.upperLips = response.body.upper_lips;
        this.bottomLips = response.body.bottom_lips;
        this.bottomLips = response.body.bottom_lips;
        this.hairObjects = response.body.hair;
        this.faceShape = this.faceShapes[0];
        this.upperLip = this.upperLips[0];
        this.bottomLip = this.bottomLips[0];
        this.hair = this.hairObjects[0];
      }, response => {
        console.log("Error")
      })
    },
    getJobDetails() {
      this.$http.get('/api/jobs', {
        responseType: 'Object'
      }).then(response => {
        console.log(response.body);
        for (j of response.body){
          this.allJobs.push({id: j.id, name: j.name});
        }
      }, response => {
        console.log("Error")
      })
    },
    getSkillsDetails() {
      this.$http.get('/api/skills', {
        responseType: 'Object'
      }).then(response => {
        this.allSkills = response.body;
      }, response => {
        console.log("Error")
      })
    },
    selectJob(job_id) {
      this.$http.get('/api/job-skills', {
        responseType: 'Object'
      }).then(response => {
        for (js of this.jobSkills){
          js.name = [];
        }
        var skills = response.body;
        for (s of skills){
            if (s.job == job_id){ //jesli trafimy na dobry zawod; skill_id może być None
              var skill_id = s.skill;
              if(skill_id == null){
                for (var i = 0; i < this.allSkills.length; i++) {
                  this.jobSkills[s.position-1].name[i] = this.allSkills[i].name;
                }
              }
              else{
                var skill_name = this.allSkills[skill_id-1].name;
                this.jobSkills[s.position-1].name.push(skill_name);
              }
            }
        }
        for (var i = 0; i < this.jobSkills.length; i++) {
          if (this.jobSkills[i].name.length == 1) { //jeśli jest tylko jedna cecha do wyboru to zapisz ją 'na sztywno' jako umiejętność głowna (w mainSkills)
            this.mainSkills[i].name = this.jobSkills[i].name[0];
          }
        }
        for (js of this.mainSkills){
          console.log("main skills", js.name);
        }
      }, response => {
        console.log("Error")
      })
    },
    setMainAttributes(attribute, value) {
      this.mainAttr[attribute].value = value;
      this.wrongValuesMsg = !this.validateValues(this.mainAttr, this.mainAttrValues);
    },
    setMainSkills(attribute, value) {
      this.mainSkills[attribute].value = value;
      this.wrongValuesMsg2 = !this.validateValues(this.mainSkills, this.mainSkillsValues);

      console.log("----twoje umiejętności----");
      for (s of this.mainSkills) {
        console.log(s.name, s.value);
      }
      console.log("-------------------");

    },
    validateValues(first, second) {
      var a = [];
      var b = [];
      var length = first.length;
      for (var i = 0; i < length; i++) {
        a.push(first[i].value);
        b.push(second[i].value);
      }
      b.sort();
      a.sort();
      for (var i = 0; i < length; i++) {
        if (a[i] != b[i]) {
          console.log("Źle ustawione wartości");
          return false;
        }
      }
      console.log("Dobrze ustawione wartości");
      return true;
    },
    setActiveColor(i) {
      if (this.appearancePages[0]) {
        this.faceColor = this.activeAppearance.colors[i];
      }
      if (this.appearancePages[1]) {
        this.lipsColor = this.activeAppearance.colors[i];
      }
      if (this.appearancePages[2]) {
        this.eyesColor = this.activeAppearance.colors[i];
      }
      if (this.appearancePages[3]) {
        this.hairColor = i + 1;
        this.hair = this.hairObjects[(this.hairColor + (this.hairShape-1)*6)-1];
      }
    },
    setActiveShape(i) {
      if (this.appearancePages[0]) {
        this.faceShape = this.faceShapes[i];
      }
      if (this.appearancePages[1]) {
        this.upperLip = this.upperLips[i];
        this.bottomLip = this.bottomLips[i];
      }
      if (this.appearancePages[2]) {
        this.leftEyeLid = this.leftEyeLids[i];
        this.rightEyeLid = this.rightEyeLids[i];
      }
      if (this.appearancePages[3]) {
        this.hairShape = i + 1;
        this.hair = this.hairObjects[(this.hairColor + (this.hairShape-1)*6)-1];
      }
    },
    saveCharacter(event) {
      this.postSuccess = false;
      this.postError = false;
      this.$http.post(
        '/api/characters/', {
          'name': this.explorerName,
          'gamer': this.gamerName,
          'age': this.explorerAge,
          'sex': this.explorerSex,
          'city': this.explorerCity,
          'birthCity': this.explorerBirthCity,
          'importantPlace': this.importantPlace,
          'nature': this.nature,
          'importantPeople': this.importantPeople,
          'strength': this.mainAttr[0].value,
          'constitution': this.mainAttr[1].value,
          'power': this.mainAttr[2].value,
          'dexterity': this.mainAttr[3].value,
          'appearance': this.mainAttr[4].value,
          'size': this.mainAttr[5].value,
          'intelligence': this.mainAttr[6].value,
          'education': this.mainAttr[7].value,
          'luck': this.luck,
          'magicPoints': this.magic,
          'damageBonus': this.damageBonusAndBuild[0],
          'build': this.damageBonusAndBuild[1],
          'hitPoints': this.hitPoints,
          'sanity': this.sanity,
          'occupation': this.job,
          'skills': `${this.mainSkills[0].name}: ${this.mainSkills[0].value}, ${this.mainSkills[1].name}: ${this.mainSkills[1].value}, ${this.mainSkills[2].name}: ${this.mainSkills[2].value}, ${this.mainSkills[3].name}: ${this.mainSkills[3].value}, ${this.mainSkills[4].name}: ${this.mainSkills[4].value}, ${this.mainSkills[5].name}: ${this.mainSkills[5].value}, ${this.mainSkills[6].name}: ${this.mainSkills[6].value},`,
          'interests': `${this.interests[0]}, ${this.interests[1]}, ${this.interests[2]}, ${this.interests[3]}`,
          'weapons': `${this.weapons[0]}, ${this.weapons[1]}`,
          'creditRating': this.creditRating,
          'equipment': `${this.equipment[0]}, ${this.equipment[1]}, ${this.equipment[2]}, ${this.equipment[3]}, ${this.equipment[4]}`,
          'face_color': `${this.faceColor}`,
          'lips_color': `${this.lipsColor}`,
          'eyes_color': `${this.eyesColor}`,
          'face': this.faceShape.id,
          'bottom_lip': this.bottomLip.id,
          'upper_lip': this.upperLip.id,
          'left_eye': this.leftEyeLid.id,
          'right_eye': this.rightEyeLid.id,
          'hair': this.hair.id,
        }, {
          responseType: 'Object'
        }).then(response => {
          console.log("Zapisano postać:", response.body);
          this.postSuccess = true;
          window.location.href = event.target.href;
      }, response => {
        console.log("Nie udało się zapisać postaci");
        this.postError = true;
      });
    },
  }
});
