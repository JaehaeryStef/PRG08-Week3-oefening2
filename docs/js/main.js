var Dead = (function () {
    function Dead(j) {
        this.jibby = j;
    }
    Dead.prototype.performBehaviour = function () {
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    };
    return Dead;
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
        this.div.style.backgroundImage = "url('images/idle.png')";
    }
    Jibby.prototype.update = function () {
        this.behaviour.performBehaviour();
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.behaviour = new Happy(this);
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.behaviour = new Hygiene(this);
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.behaviour = new Hungry(this);
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
var Happy = (function () {
    function Happy(j) {
        this.jibby = j;
        this.jibby.happyness += 50;
    }
    Happy.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Happy;
}());
var Hungry = (function () {
    function Hungry(j) {
        this.jibby = j;
        this.jibby.food += 55;
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
var Hygiene = (function () {
    function Hygiene(j) {
        this.jibby = j;
        this.jibby.hygiene += 60;
    }
    Hygiene.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        var a = 0;
        a++;
        if (a == 10) {
            this.jibby.behaviour = new Idle(this.jibby);
        }
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Hygiene;
}());
var Idle = (function () {
    function Idle(j) {
        this.jibby = j;
    }
    Idle.prototype.performBehaviour = function () {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        if (this.jibby.food < 0 || this.jibby.hygiene < 0 || this.jibby.happyness < 0) {
            console.log("jibby died");
            this.jibby.behaviour = new Dead(this.jibby);
        }
    };
    return Idle;
}());
//# sourceMappingURL=main.js.map