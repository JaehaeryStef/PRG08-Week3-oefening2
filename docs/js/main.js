var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
    }
    Dead.prototype.performBehaviour = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    return Dead;
}());
var Eating = (function () {
    function Eating(j) {
        this.jibby = j;
        this.time = 0;
        this.jibby.div.style.backgroundImage = "url('images/eating.gif')";
    }
    Eating.prototype.performBehaviour = function () {
        this.jibby.food += 0.2;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        this.time++;
        if (this.time == 150) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Eating;
}());
var Filty = (function () {
    function Filty(j) {
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/dirty.png')";
    }
    Filty.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Filty;
}());
var Jibby = (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
        this.behaviour = new Idle(this);
    }
    Jibby.prototype.update = function () {
        this.behaviour.performBehaviour();
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.behaviour = new Petting(this);
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.behaviour = new Washing(this);
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.behaviour = new Eating(this);
    };
    return Jibby;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.jibby = new Jibby(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.jibby.update();
        this.updateUI();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.updateUI = function () {
        document.getElementsByTagName("food")[0].innerHTML = Math.round(this.jibby.food).toString();
        document.getElementsByTagName("happyness")[0].innerHTML = Math.round(this.jibby.happyness).toString();
        document.getElementsByTagName("hygiene")[0].innerHTML = Math.round(this.jibby.hygiene).toString();
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Hungry = (function () {
    function Hungry(j) {
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/hungry.png')";
    }
    Hungry.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Hungry;
}());
var Idle = (function () {
    function Idle(j) {
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/idle.png')";
        this.time = 0;
    }
    Idle.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        if (this.jibby.food <= 20) {
            this.jibby.behaviour = new Hungry(this.jibby);
        }
        if (this.jibby.hygiene <= 20) {
            this.jibby.behaviour = new Filty(this.jibby);
        }
        if (this.jibby.happyness <= 20) {
            this.jibby.behaviour = new Sad(this.jibby);
        }
        this.time++;
        if (this.time == 300) {
            this.jibby.behaviour = new Sleeping(this.jibby);
        }
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Idle;
}());
var Petting = (function () {
    function Petting(j) {
        this.jibby = j;
        this.time = 0;
        this.jibby.div.style.backgroundImage = "url('images/happy.png')";
    }
    Petting.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness += 0.2;
        this.time++;
        if (this.time == 150) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Petting;
}());
var Sad = (function () {
    function Sad(j) {
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/sad.png')";
    }
    Sad.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Sad;
}());
var Sleeping = (function () {
    function Sleeping(j) {
        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
    }
    Sleeping.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        if (this.jibby.food <= 20) {
            this.jibby.behaviour = new Hungry(this.jibby);
        }
        if (this.jibby.hygiene <= 20) {
            this.jibby.behaviour = new Filty(this.jibby);
        }
        if (this.jibby.happyness <= 20) {
            this.jibby.behaviour = new Sad(this.jibby);
        }
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Sleeping;
}());
var Washing = (function () {
    function Washing(j) {
        this.jibby = j;
        this.time = 0;
        this.jibby.div.style.backgroundImage = "url('images/washing.png')";
    }
    Washing.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene += 0.2;
        this.jibby.happyness -= 0.02;
        this.time++;
        if (this.time == 150) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Washing;
}());
//# sourceMappingURL=main.js.map