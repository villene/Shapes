var hud = Class.extend({
    init: function(){
        this.roundCounter;
        this.timeCounter;
        this.tryCounter;
        this.tries = currLvl.tries;
        this.time = currLvl.time;        
        
        this.draw();
    }
    ,draw: function(){
        var style = { font: "30px Arial", fill: "white", align: "center" };
        
        this.roundCounter = game.add.text(gameWidth/6, gameHeight/20, 'Round\n'+currRound+'/3', style);
        this.roundCounter.anchor.set(0.5);
        
        this.timeCounter = game.add.text(gameWidth/2, gameHeight/20, 'Time\n'+this.time, style);
        this.timeCounter.anchor.set(0.5);
        
        this.tryCounter = game.add.text(gameWidth-gameWidth/6, gameHeight/20, 'Tries left\n'+this.tries, style);
        this.tryCounter.anchor.set(0.5);
    }
    ,updateTries: function(){
        this.tries--;
        this.tryCounter.setText('Tries left\n'+this.tries);
    }
    ,startCountdown: function(){        
        this.timer = game.time.create(false);
        this.timer.loop(1000, this.updateTimer, this);
        this.timer.start();             
    }
    ,updateTimer: function(){        
        if(this.time>0){
            this.time--;
            this.timeCounter.setText('Time\n'+this.time);
        }
        else{
            this.timer.stop();           
            grid.destroy();
            game.state.start('levels');
        }
        
    }
    ,destroy: function(){
        this.roundCounter.destroy();
        this.timeCounter.destroy();
        this.tryCounter.destroy();
        this.timer.destroy();
    }
})