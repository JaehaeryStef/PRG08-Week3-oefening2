class Washing implements Behaviour {

    jibby: Jibby;
    private time: number;
    


    constructor(j: Jibby) {

        this.jibby = j;
        this.time = 0;
        
           this.jibby.div.style.backgroundImage = "url('images/washing.png')";
       
                
        

    }
   performBehaviour() {
        this.jibby.food -= 0.03;
        this.jibby.hygiene += 0.2;
        this.jibby.happyness -= 0.02;
        
        this.time++;
        
        if (this.time == 150) {
              this.jibby.behaviour = new Idle(this.jibby);
        }
       
        
        
        
        
         if(this.jibby.food < 0|| this.jibby.hygiene < 0 || this.jibby.happyness < 0){
            console.log("jibby died")
            this.jibby.behaviour = new Dead(this.jibby);
            
            
        }
    }
}