class Hygiene implements Behaviour {

    jibby: Jibby;
    


    constructor(j: Jibby) {

        this.jibby = j;
        this.jibby.hygiene += 60;
                
        

    }
   performBehaviour() {
        this.jibby.food -= 0.03;
        this.jibby.hygiene -= 0.015;
        this.jibby.happyness -= 0.02;
        
        let a = 0;
        a++;
        if(a == 10){
            this.jibby.behaviour = new Idle(this.jibby);
        }
        
        
        
         if(this.jibby.food < 0|| this.jibby.hygiene < 0 || this.jibby.happyness < 0){
            console.log("jibby died")
            this.jibby.behaviour = new Dead(this.jibby);
            
            
        }
    }
}