class Sleeping implements Behaviour {

    jibby: Jibby;
    

    constructor(j: Jibby) {

        this.jibby = j;
        this.jibby.div.style.backgroundImage = "url('images/sleeping.png')";
       
        //Make the browser speak
        // var to_speak = new SpeechSynthesisUtterance('Hello I am Jibby!');
        // window.speechSynthesis.speak(to_speak);
        // console.log("i am hungry");

    }
    performBehaviour() {
               
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        
          if (this.jibby.food <= 20) {
            this.jibby.behaviour = new Hungry(this.jibby);
        }
       
        
        if (this.jibby.hygiene <=20) {
            this.jibby.behaviour = new Filty(this.jibby);
        }
        
        if (this.jibby.happyness <= 20) {
            this.jibby.behaviour = new Sad(this.jibby);
        }
        
        
           
        
         if(this.jibby.food < 0|| this.jibby.hygiene < 0 || this.jibby.happyness < 0){
            console.log("jibby died")
            this.jibby.behaviour = new Dead(this.jibby);
        }
    }
}