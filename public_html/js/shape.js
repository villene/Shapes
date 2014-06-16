var Shape = Class.extend({
    init: function(){
        this.group = game.add.group();
        this.draw();
        this.show();
    }
    
    ,draw: function(){
       var bg = game.add.sprite(0, gameHeight - gameHeight/5, 'shapebg');
       bg.height = gameHeight/5;
       bg.width = gameWidth;
       this.group.add(bg);
       
       var correct = game.add.sprite(gameWidth/2, gameHeight - gameHeight/10, 'black');
       correct.anchor.setTo(0.5, 0.5);
       correct.frame = game.rnd.integerInRange(0, shapes.list.length);
       this.group.add(correct);
    }
    
    ,show: function(){
        this.group.y = gameHeight;
        game.add.tween(this.group).to({y: 0}, 500).start();
    }
    
    ,hide: function(){
        var tween = game.add.tween(this.group).to({y: gameHeight}, 500).start();
        tween.onComplete.add(this.destroy, this);
    }
    
    ,destroy: function(){
        this.group.destroy();
    }
})