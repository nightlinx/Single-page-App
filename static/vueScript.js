
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
      allJobs: ['Aktor', 'Antykwariusz', 'Artysta', 'Detektyw', 'Hobbysta', 'Lekarz', 'Policjant', 'Student'],
      allWeapons: ['Krótki nóż: 1K4', 'Broń krótka: 1K10', 'Maczeta: 1K8', "Mała pałka: 1K6"],
      allEquipment: ['Koc', 'Apteczka', 'Lampa naftowa', 'Zapałki', 'Lina', 'Butelka wina', 'Ołówek', 'Zeszyt', 'Torebka'],
      allSkills: [{
          name: 'Charakteryzacja',
          value: 25
        },
        {
          name: 'Elektryka',
          value: 30
        },
        {
          name: 'Medycyna',
          value: 21
        },
        {
          name: 'Historia',
          value: 25
        },
        {
          name: 'Tropienie',
          value: 30
        },
        {
          name: 'Język włoski',
          value: 21
        },
        {
          name: 'Język francuski',
          value: 21
        },
        {
          name: 'Zastraszanie',
          value: 20
        },
        {
          name: 'Nasłuchiwanie',
          value: 20
        }
      ],
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
      face: '#F8D6C8',
      eyes: '#5C802E',
      lipsColor: '#D66E6E',
      faceShapes: [{
          Mx: 100,
          My: 100,
          rx: 50,
          ry: 70,
          x: 100
        },
        {
          Mx: 100,
          My: 100,
          rx: 50,
          ry: 75,
          x: 100
        },
        {
          Mx: 95,
          My: 105,
          rx: 52,
          ry: 60,
          x: 110
        }
      ],
      faceShape: {
        Mx: 100,
        My: 100,
        rx: 50,
        ry: 70,
        x: 100
      },
      leftEyeLids: [{
          Mx: 90,
          My: 105,
          Cx1: 90,
          Cy1: 100,
          Cx2: 105,
          Cy2: 95,
          Cx: 115,
          Cy: 105
        },
        {
          Mx: 85,
          My: 100,
          Cx1: 90,
          Cy1: 100,
          Cx2: 105,
          Cy2: 95,
          Cx: 115,
          Cy: 105
        },
        {
          Mx: 95,
          My: 100,
          Cx1: 90,
          Cy1: 105,
          Cx2: 105,
          Cy2: 95,
          Cx: 115,
          Cy: 105
        }
      ],

      rightEyeLids: [{
          Mx: 133,
          My: 105,
          Cx1: 143,
          Cy1: 95,
          Cx2: 158,
          Cy2: 100,
          Cx: 158,
          Cy: 105
        },
        {
          Mx: 133,
          My: 105,
          Cx1: 143,
          Cy1: 95,
          Cx2: 158,
          Cy2: 100,
          Cx: 163,
          Cy: 100
        },
        {
          Mx: 133,
          My: 105,
          Cx1: 143,
          Cy1: 95,
          Cx2: 158,
          Cy2: 105,
          Cx: 153,
          Cy: 100
        }
      ],

      upperLips: [{
          Mx: 110,
          My: 145,
          Cx1: 115,
          Cy1: 140,
          Cx2: 125,
          Cy2: 140,
          Cx: 125,
          Cy: 142,
          h: 30
        },
        {
          Mx: 110,
          My: 145,
          Cx1: 115,
          Cy1: 137,
          Cx2: 125,
          Cy2: 137,
          Cx: 125,
          Cy: 140,
          h: 30
        },
        {
          Mx: 110,
          My: 145,
          Cx1: 115,
          Cy1: 140,
          Cx2: 125,
          Cy2: 140,
          Cx: 125,
          Cy: 142,
          h: 0
        }
      ],
      downerLips: [{
          Mx: 110,
          My: 145,
          Cx1: 115,
          Cy1: 150,
          Cx2: 135,
          Cy2: 150,
          Cx: 140,
          Cy: 145
        },
        {
          Mx: 110,
          My: 145,
          Cx1: 115,
          Cy1: 155,
          Cx2: 135,
          Cy2: 155,
          Cx: 140,
          Cy: 145
        },
        {
          Mx: 117,
          My: 148,
          Cx1: 115,
          Cy1: 150,
          Cx2: 135,
          Cy2: 150,
          Cx: 132,
          Cy: 148
        }
      ],

      leftEyeLid: {},
      rightEyeLid: {},
      upperLip:{
                Mx: 110,
                My: 145,
                Cx1: 115,
                Cy1: 137,
                Cx2: 125,
                Cy2: 137,
                Cx: 125,
                Cy: 140,
                h: 30
              },
      downerLip:{
                Mx: 110,
                My: 145,
                Cx1: 115,
                Cy1: 155,
                Cx2: 135,
                Cy2: 155,
                Cx: 140,
                Cy: 145
              },
      hairShape: 1,
      hairColor: 3,
      hairSize: {
        width: '250px',
        height: '260px',
        left: '-5px',
        top: '17px',
      }
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
        return {d}
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
        return {d}
      },
      eyesPaths() {
        const svgSize = this._data.svgSize;
        var d = `M 106, 107
             a 3,3 0 1,0 -3,0

             M 147, 107
             a 3,3 0 1,0 -3,0`;
        return {d};
      },
      lipsPaths() {
        var up = this.upperLip;
        var down = this.downerLip;
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
        return {d};
      },
      nosePaths() {
        var d = `M 117, 127
             C 115, 132
             135, 132
             132, 127`;
      return {d};
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
        return {d};
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
        console.log('watch: waeopons | ', this.weapons);
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
      },
      switchToElement(pageIndex) {
        var vm = this;
        for (var i = 0; i < this.appearancePages.length; i++) {
          vm.$set(vm.appearancePages, i, false);
        }
        vm.$set(vm.appearancePages, pageIndex, true);
        this.activeAppearance = this.appearance[pageIndex];
      },
      setJobSkills(job) {
        //jeśli job = 'Detektyw' to ....
        // tutaj będę pobierać GETem umiejętności danego zawodu
        this.jobSkills[0].name = ['Sztuka/Rzemiosło', 'Charakteryzacja'];
        this.jobSkills[1].name = ['Broń palna'];
        this.jobSkills[2].name = ['Nasłuchiwanie'];
        this.jobSkills[3].name = ['Prawo'];
        this.jobSkills[4].name = ['Urok Osobisty', 'Gadanina', 'Zastraszanie', 'Perswazja'];
        this.jobSkills[5].name = ['Psychologia'];
        this.jobSkills[6].name = ['Spostrzegawczość'];
        for (var i = 0; i < this.allSkills.length; i++) {
          this.jobSkills[7].name[i] = this.allSkills[i].name;
        }
        this.jobSkills[8].name = ['Majętnosć'];
      },
      selectJob(job) {
        this.setJobSkills(job);
        for (var i = 0; i < this.jobSkills.length; i++) {
          if (this.jobSkills[i].name.length == 1) { //jeśli jest tylko jedna cecha do wyboru to zapisz ją 'na sztywno' jako umiejętność głowna (w mainSkills)
            this.mainSkills[i].name = this.jobSkills[i].name[0];
            //console.log(this.jobSkills[i].name[0])
          }
        }
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
          this.face = this.activeAppearance.colors[i];
        }
        if (this.appearancePages[1]) {
          this.lipsColor = this.activeAppearance.colors[i];
        }
        if (this.appearancePages[2]) {
          this.eyes = this.activeAppearance.colors[i];
        }
        if (this.appearancePages[3]) {
          this.hairColor = i + 1;
        }
      },
      setActiveShape(i) {
        if (this.appearancePages[0]) {
          this.faceShape = this.faceShapes[i];
        }
        if (this.appearancePages[1]) {
          this.upperLip = this.upperLips[i];
          this.downerLip = this.downerLips[i];
        }
        if (this.appearancePages[2]) {
          this.leftEyeLid = this.leftEyeLids[i];
          this.rightEyeLid = this.rightEyeLids[i];
        }
        if (this.appearancePages[3]) {
          this.hairShape = i + 1;
          if (this.hairShape == 1) {
            this.hairSize.width = '250px';
            this.hairSize.height = '260px';
            this.hairSize.left = '-5px';
            this.hairSize.top = '17px';
          }
          if (this.hairShape == 2) {
            this.hairSize.width = '165px';
            this.hairSize.height = '165px';
            this.hairSize.left = '37px';
            this.hairSize.top = '-8px';
          }
          if (this.hairShape == 3) {
            this.hairSize.width = '140px';
            this.hairSize.height = '175px';
            this.hairSize.left = '57px';
            this.hairSize.top = '25px';
          }
        }
      },
      saveCharacter() {
        this.$http.post(
          '/characters',
          {'name': this.explorerName,
           'gamer': this.gamerName,
           'age': this.explorerAge,
           'sex': this.explorerSex,
           'city': this.explorerCity,
           'birthCity': this.explorerBirthCity,
           'importantPlace': this.importantPlace,
           'nature': this.nature,
           'importantPeople': this.importantPeople,
         },
         {responseType: 'Object'}).then(response => {}, response => {console.log(response.body)});
      },
    }
  });
