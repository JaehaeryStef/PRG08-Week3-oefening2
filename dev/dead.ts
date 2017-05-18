class Dead implements Behaviour {

    jibby:Jibby;
    
    constructor(j: Jibby){
        this.jibby = j;
    }

    performBehaviour(){
        this.jibby.div.style.backgroundImage = "url('images/dead.png')";
    }

}