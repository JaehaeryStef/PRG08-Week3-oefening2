class Jibby {
    public behaviour: Behaviour;

    public hygiene: number;
    public food: number;
    public happyness: number;

    public div: HTMLElement;
    public x: number;
    public y: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);

        // start instellingen
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;

        // click listeners
        this.div.addEventListener("click", () => this.onPet());
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", () => this.onEat());
        document.getElementsByTagName("washbutton")[0].addEventListener("click", () => this.onWash());

        // hier het gedrag toekennen
        this.behaviour = new Idle(this);
 

        // afbeelding voor idle - verplaatsen naar idle gedrag
        this.div.style.backgroundImage = "url('images/idle.png')";
    }

    public update(): void {

        this.behaviour.performBehaviour();
        // hier het gedrag updaten
        // ...

        // waarden verlagen per frame - dit moet in het gedrag staan
        //  this.hygiene -= 0.01;
        //  this.food -= 0.02;
        // this.behaviour.happy -= 0.015;
    }


    private onPet(): void {
        console.log("you clicked on jibby!");
        this.behaviour = new Happy(this);
        // hier moet je de onPet functie van het gedrag aanroepen
    }

    private onWash(): void {
        console.log("washing jibby!");
        this.behaviour = new Hygiene(this);
        // hier moet je de onWash functie van het gedrag aanroepen
    }

    private onEat(): void {
        console.log("jibby is eating!");
        this.behaviour = new Hungry(this);
        // hier moet je de onEat functie van het gedrag aanroepen
    }


}
