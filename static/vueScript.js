function getCookie(cookiename) {
  var cookiestring = RegExp(""+cookiename+"[^;]+").exec(document.cookie);
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

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
    cashDraw: true,
    wrongValuesMsg: false,
    wrongValuesMsg2: false,
    allJobs: [],
    allWeapons: ['Ataki bez broni: 1K3 + Mod.Obr.', 'Krótki nóż: 1K4 + Mod.Obr.',
      'Maczeta: 1K8 + Mod.Obr.', 'Kij baseballowy: 1K6 + Mod.Obr.', 'Broń krótka: 1K10 + Mod.Obr.',
      'Mała pałka: 1K6 + Mod.Obr.', 'Strzelba: 4K6', 'Karabin: 2K6 + 4'
    ],
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
    faceShapes: [
      {
            "id": 1,
            "Mx": 100,
            "My": 100,
            "rx": 50,
            "ry": 70,
            "x": 100
        },
        {
            "id": 2,
            "Mx": 100,
            "My": 100,
            "rx": 50,
            "ry": 75,
            "x": 100
        },
        {
            "id": 3,
            "Mx": 95,
            "My": 105,
            "rx": 52,
            "ry": 60,
            "x": 110
        }
    ],
    leftEyeLids: [
      {
            "id": 1,
            "Mx": 90,
            "My": 105,
            "Cx1": 90,
            "Cy1": 100,
            "Cx2": 105,
            "Cy2": 95,
            "Cx": 115,
            "Cy": 105
        },
        {
            "id": 2,
            "Mx": 85,
            "My": 100,
            "Cx1": 90,
            "Cy1": 100,
            "Cx2": 105,
            "Cy2": 95,
            "Cx": 115,
            "Cy": 105
        },
        {
            "id": 3,
            "Mx": 95,
            "My": 100,
            "Cx1": 90,
            "Cy1": 105,
            "Cx2": 105,
            "Cy2": 95,
            "Cx": 115,
            "Cy": 105
        }
    ],
    rightEyeLids: [
      {
            "id": 1,
            "Mx": 133,
            "My": 105,
            "Cx1": 143,
            "Cy1": 95,
            "Cx2": 158,
            "Cy2": 100,
            "Cx": 158,
            "Cy": 105
        },
        {
            "id": 2,
            "Mx": 133,
            "My": 105,
            "Cx1": 143,
            "Cy1": 95,
            "Cx2": 158,
            "Cy2": 100,
            "Cx": 163,
            "Cy": 100
        },
        {
            "id": 3,
            "Mx": 133,
            "My": 105,
            "Cx1": 143,
            "Cy1": 95,
            "Cx2": 158,
            "Cy2": 105,
            "Cx": 153,
            "Cy": 100
        }
    ],
    upperLips: [
      {
            "id": 1,
            "Mx": 110,
            "My": 145,
            "Cx1": 115,
            "Cy1": 140,
            "Cx2": 125,
            "Cy2": 140,
            "Cx": 125,
            "Cy": 142,
            "h": 30
        },
        {
            "id": 2,
            "Mx": 110,
            "My": 145,
            "Cx1": 115,
            "Cy1": 137,
            "Cx2": 125,
            "Cy2": 137,
            "Cx": 125,
            "Cy": 140,
            "h": 30
        },
        {
            "id": 3,
            "Mx": 110,
            "My": 145,
            "Cx1": 115,
            "Cy1": 140,
            "Cx2": 125,
            "Cy2": 140,
            "Cx": 125,
            "Cy": 142,
            "h": 0
        }
    ],
    bottomLips: [
      {
            "id": 1,
            "Mx": 110,
            "My": 145,
            "Cx1": 115,
            "Cy1": 150,
            "Cx2": 135,
            "Cy2": 150,
            "Cx": 140,
            "Cy": 145,
            "h": 0
        },
        {
            "id": 2,
            "Mx": 110,
            "My": 145,
            "Cx1": 115,
            "Cy1": 155,
            "Cx2": 135,
            "Cy2": 155,
            "Cx": 140,
            "Cy": 145,
            "h": 0
        },
        {
            "id": 3,
            "Mx": 117,
            "My": 148,
            "Cx1": 115,
            "Cy1": 150,
            "Cx2": 135,
            "Cy2": 150,
            "Cx": 132,
            "Cy": 148,
            "h": 0
        }
    ],
    leftEyeLid: {},
    rightEyeLid: {},
    faceShape: {},
    upperLip: {},
    bottomLip: {},
    hairShape: 1,
    hairColor: 3,
    hairObjects: [
      {
            "id": 1,
            "name": "",
            "image": "img/models.Hair/11.png",
            "width": "250px",
            "height": "260px",
            "left": "-5px",
            "top": "17px"
        },
        {
            "id": 2,
            "name": "",
            "image": "img/models.Hair/12.png",
            "width": "250px",
            "height": "260px",
            "left": "-5px",
            "top": "17px"
        },
        {
            "id": 3,
            "name": "",
            "image": "img/models.Hair/13.png",
            "width": "250px",
            "height": "260px",
            "left": "-5px",
            "top": "17px"
        },
        {
            "id": 4,
            "name": "",
            "image": "img/models.Hair/14.png",
            "width": "250px",
            "height": "260px",
            "left": "-5px",
            "top": "17px"
        },
        {
            "id": 5,
            "name": "",
            "image": "img/models.Hair/15.png",
            "width": "250px",
            "height": "260px",
            "left": "-5px",
            "top": "17px"
        },
        {
            "id": 6,
            "name": "",
            "image": "img/models.Hair/16.png",
            "width": "250px",
            "height": "260px",
            "left": "-5px",
            "top": "17px"
        },
        {
            "id": 7,
            "name": "",
            "image": "img/models.Hair/21.png",
            "width": "165px",
            "height": "165px",
            "left": "37px",
            "top": "-8px"
        },
        {
            "id": 8,
            "name": "",
            "image": "img/models.Hair/22.png",
            "width": "165px",
            "height": "165px",
            "left": "37px",
            "top": "-8px"
        },
        {
            "id": 9,
            "name": "",
            "image": "img/models.Hair/23.png",
            "width": "165px",
            "height": "165px",
            "left": "37px",
            "top": "-8px"
        },
        {
            "id": 10,
            "name": "",
            "image": "img/models.Hair/24.png",
            "width": "165px",
            "height": "165px",
            "left": "37px",
            "top": "-8px"
        },
        {
            "id": 11,
            "name": "",
            "image": "img/models.Hair/25.png",
            "width": "165px",
            "height": "165px",
            "left": "37px",
            "top": "-8px"
        },
        {
            "id": 12,
            "name": "",
            "image": "img/models.Hair/26.png",
            "width": "165px",
            "height": "165px",
            "left": "37px",
            "top": "-8px"
        },
        {
            "id": 13,
            "name": "",
            "image": "img/models.Hair/31.png",
            "width": "140px",
            "height": "175px",
            "left": "57px",
            "top": "25px"
        },
        {
            "id": 14,
            "name": "",
            "image": "img/models.Hair/32.png",
            "width": "140px",
            "height": "175px",
            "left": "57px",
            "top": "25px"
        },
        {
            "id": 15,
            "name": "",
            "image": "img/models.Hair/33.png",
            "width": "140px",
            "height": "175px",
            "left": "57px",
            "top": "25px"
        },
        {
            "id": 16,
            "name": "",
            "image": "img/models.Hair/34.png",
            "width": "140px",
            "height": "175px",
            "left": "57px",
            "top": "25px"
        },
        {
            "id": 17,
            "name": "",
            "image": "img/models.Hair/35.png",
            "width": "140px",
            "height": "175px",
            "left": "57px",
            "top": "25px"
        },
        {
            "id": 18,
            "name": "",
            "image": "img/models.Hair/36.png",
            "width": "140px",
            "height": "175px",
            "left": "57px",
            "top": "25px"
        }
    ],
    hair: {},
    postError: false,
    postSuccess: false,
    appearance_url: '',
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
      var first = Math.floor(Math.random() * 6) + 1;
      var sec = Math.floor(Math.random() * 6) + 1;
      var third = Math.floor(Math.random() * 6) + 1;
      return (first + sec + third) * 5;
    },
    cash: function() {
      return this.mainSkills[8].value * 5;
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
           `M 90, 92
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
      return `/static/img/hair/${this.hairShape}${this.hairColor}.png`;
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
        this.setDefaultAppearance();
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
    setDefaultAppearance() {
        this.faceShape = this.faceShapes[0];
        this.upperLip = this.upperLips[0];
        this.bottomLip = this.bottomLips[0];
        this.hair = this.hairObjects[0];
    },
    getJobDetails() {
      this.$http.get('/api/jobs', {
        responseType: 'Object'
      }).then(response => {
        console.log(response.body);
        for (j of response.body) {
          this.allJobs.push({
            id: j.id,
            name: j.name
          });
        }
      }, response => {
        console.log("Error fetching jobs data");
      })
    },
    getSkillsDetails() {
      this.$http.get('/api/skills', {
        responseType: 'Object'
      }).then(response => {
        this.allSkills = response.body;
      }, response => {
        console.log("Error fetching skills data");
      })
    },
    selectJob(job_id) {
      this.$http.get('/api/job-skills', {
        responseType: 'Object'
      }).then(response => {
        for (js of this.jobSkills) {
          js.name = [];
        }
        var skills = response.body;
        for (s of skills) {
          if (s.job == job_id) {
            var skill_id = s.skill;
            if (skill_id == null) {
              for (var i = 0; i < this.allSkills.length; i++) {
                this.jobSkills[s.position - 1].name[i] = this.allSkills[i].name;
              }
            } else {
              var skill_name = this.allSkills[skill_id - 1].name;
              this.jobSkills[s.position - 1].name.push(skill_name);
            }
          }
        }
        for (var i = 0; i < this.jobSkills.length; i++) {
          if (this.jobSkills[i].name.length == 1) {
            this.mainSkills[i].name = this.jobSkills[i].name[0];
          }
        }
        for (js of this.mainSkills) {
          console.log("main skills", js.name);
        }
      }, response => {
        console.log("Error fetching job-skills data");
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
        this.hair = this.hairObjects[(this.hairColor + (this.hairShape - 1) * 6) - 1];
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
        this.hair = this.hairObjects[(this.hairColor + (this.hairShape - 1) * 6) - 1];
      }
    },
    saveCharacter(event) {
      this.postSuccess = false;
      this.postError = false;
      this.elementToCanvas(this.$refs.printMe);
      console.log('appearance_url', this.appearance_url);
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
          'appear': this.mainAttr[4].value,
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
          'skills': `${this.mainSkills[0].name}: ${this.mainSkills[0].value}, ${this.mainSkills[1].name}: ${this.mainSkills[1].value}, ${this.mainSkills[2].name}: ${this.mainSkills[2].value}, ${this.mainSkills[3].name}: ${this.mainSkills[3].value}, ${this.mainSkills[4].name}: ${this.mainSkills[4].value}, ${this.mainSkills[5].name}: ${this.mainSkills[5].value}, ${this.mainSkills[6].name}: ${this.mainSkills[6].value}, ${this.mainSkills[7].name}: ${this.mainSkills[7].value}, ${this.mainSkills[8].name}: ${this.mainSkills[8].value},`,
          'interests': `${this.interests[0]}, ${this.interests[1]}, ${this.interests[2]}, ${this.interests[3]}`,
          'weapons': `${this.weapons[0]}, ${this.weapons[1]}`,
          'cash': this.cash,
          'equipment': `${this.equipment[0]}, ${this.equipment[1]}, ${this.equipment[2]}, ${this.equipment[3]}, ${this.equipment[4]}`,
          'appearance': `${this.appearance_url}`,

        }, {
          responseType: 'Object',
          headers: {"X-CSRFToken": getCookie("csrftoken")},
        }).then(response => {
        console.log("Zapisano postać:", response.body);
        this.postSuccess = true;
        window.location.href = event.target.href;
      }, response => {
        console.log("Nie udało się zapisać postaci");
        this.postError = true;
      });
    },
    elementToCanvas(el) {
      html2canvas(el).then(canvas => {
        this.appearance_url = canvas.toDataURL();
      }).catch((error) => {
        console.log("Error rendering element to canvas")
      });
    },
  }
});
