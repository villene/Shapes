var Shape = Class.extend({
    init: function(){        
        this.group = game.add.group();
        this.draw();
        //this.show();
    }
    
    ,draw: function(){
       this.group.y=gameHeight;
       var bg = game.add.sprite(0, gameHeight - gameHeight/5, 'shapebg');
       bg.height = gameHeight/5;
       bg.width = gameWidth;
       this.group.add(bg);
       
       var rnd = grid.list[game.rnd.integerInRange(0, grid.list.length)].shape;
       console.log(rnd);
       var correct = game.add.sprite(gameWidth/2, gameHeight - gameHeight/10, rnd.key);
       correct.anchor.setTo(0.5, 0.5);
       correct.frame = rnd.frame;
       this.group.add(correct);
    }
    
    ,show: function(){
        //this.group.y = gameHeight;
        game.add.tween(this.group).to({y: 0}, 500).start();
        this.enableInput();
    }
    ,enableInput: function(){
        for(var i=0, l=grid.list.length; i<l; i++)
            grid.list[i].enableInput();
    }
    
    ,hide: function(){
        var tween = game.add.tween(this.group).to({y: gameHeight}, 500).start();
        tween.onComplete.add(this.destroy, this);
    }
    
    ,destroy: function(){
        this.group.destroy();
    }
})