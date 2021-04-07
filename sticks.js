


const colorController = {
  data() {
    return {
      turn: 'Red',
      BGcolor: 'background-color: Red',
      stickColor: [
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey',
        'Grey'
      ],
      stickBGcolor: [
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey',
        'background-color: Grey'
      ],
      counter: 3
    }
  },
  methods: {
    changeTurn() {
      if (this.counter <= 0) {
        if (this.turn == "Red") {
          this.turn = "Green";
          this.BGcolor = "background-color: Green";
        }
        else if (this.turn == "Green") {
          this.turn = "Red";
          this.BGcolor = "background-color: Red";
        }
        this.counter = 3;
      }
    },

    changeColor(int) {
      // console.log(this.stickColor[int]);
      if (this.stickColor[int] == "Grey") {
        this.stickColor[int] = this.turn;
        if (this.turn == "Red") {
          this.stickBGcolor[int] = "background-color: Red";
        }
        else if (this.turn == "Green") {
          this.stickBGcolor[int] = "background-color: Green";
        }
        this.counter--;
        // console.log(this.counter);
        this.changeTurn()
      }
    },

    changeSeen() {
      if (this.seen == "initial") {
        this.seen = "none";
      }
      else if (this.seen == "none") {
        this.seen = "initial";
      }
      console.log("changedSeen");
    },

    getStickBGcolor(int) {
      console.log(this.stickBGcolor[int]);
      return[this.stickBGcolor[int]]
    },

    buttonClick0() {
      this.changeColor(0);
      this.changeTurn();
      // console.log(this.BGcolor);
      console.log(this.stickBGcolor[0]);
    },
    buttonClick1() {
      this.changeColor(1);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick2() {
      this.changeColor(2);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick3() {
      this.changeColor(3);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick4() {
      this.changeColor(4);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick5() {
      this.changeColor(5);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick6() {
      this.changeColor(6);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick7() {
      this.changeColor(7);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick8() {
      this.changeColor(8);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick9() {
      this.changeColor(9);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick10() {
      this.changeColor(10);
      this.changeTurn();
      console.log(this.BGcolor);
    },
    buttonClick11() {
      this.changeColor(11);
      this.changeTurn();
      console.log(this.BGcolor);
    },


    reset() {
      for (x in this.stickColor) {
        this.stickColor[x] = "Grey";
        this.stickBGcolor[x] = "background-color: Grey";
        this.turn = "Red";
        this.BGcolor = 'background-color: Red';
        this.counter = 3;
      }
    },

    endTurn() {
      if (this.counter < 3) {
        this.counter = 0;
        this.changeTurn();
      }
    }
  }

}



Vue.createApp(colorController).mount("#stick-game")











  




