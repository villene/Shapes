var Shape = Class.extend({
    init: function(list){        
        this.group = game.add.group();
        this.draw(list);
        //this.show();
    }
    
    ,draw: function(list){
       this.group.y=gameHeight;
       var bg = game.add.sprite(0, gameHeight - gameHeight/5, 'shapebg');
       bg.height = gameHeight/5;
       bg.width = gameWidth;
       this.group.add(bg);
       
       var rnd;
       do{
       rnd = list[game.rnd.integerInRange(0, list.length-1)].shape;
       } while(rnd.frame===checkMarkSprite);
       console.log('rnd='+rnd.frame);
      
       
       var correct = game.add.sprite(gameWidth/2, gameHeight - gameHeight/10, rnd.key);
       correct.anchor.setTo(0.5, 0.5);
       correct.frame = rnd.frame;
       this.group.add(correct);
    }
    
    ,show: function(){
        //this.group.y = gameHeight;
        var tween = game.add.tween(this.group).to({y: 0}, 500).start();
        tween.onComplete.add(this.enableInput, this);
        if (grid.correctShapes===1) tween.onComplete.add(grid.HUD.startCountdown, grid.HUD);
        
    }
    ,enableInput: function(){
        for(var i=0, l=grid.list.length; i<l; i++)
            if(grid.list[i].shape.frame!==checkMarkSprite) grid.list[i].enableInput();
    }
    
    ,hide: function(){
        var tween = game.add.tween(this.group).to({y: gameHeight}, 500).start();
        tween.onComplete.add(this.destroy, this);
    }
    
    ,destroy: function(){
        this.group.destroy();
    }
})