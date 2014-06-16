var Tile = Class.extend({
    init: function(x,y){
        console.log(x,y);
        this.draw(x,y);
    }
    
    ,draw: function(x,y){
        this.sprite = game.add.sprite(x, y, 'tile');
        this.sprite.frame=0
        this.sprite.height=tileSize;
        this.sprite.width=tileSize;        
        this.sprite.inputEnabled = true;
        this.sprite.events.onInputOver.add(this.mouseOver, this);
        this.sprite.events.onInputOut.add(this.mouseOut, this);
        this.sprite.events.onInputDown.add(this.correctCheck, this);
        this.assignShape(x, y);
    }
    
    ,assignShape: function(x,y){                
        this.shape = game.add.sprite(x, y, 'black');        
        var rnd = game.rnd.integerInRange(0, 3);
//        while(grid.checkRepeat(rnd)===true){
//        //this.checkRepeat
//        rnd = game.rnd.integerInRange(0, 3);
//        }
        this.shape.frame=rnd;
        this.shape.height=tileSize;
        this.shape.width = tileSize;
    }
    
    ,correctCheck: function(){
        if (this.shape.frame===correctShape.group.children[1].frame)
            correctShape.hide();
    }
    ,mouseOver: function(){
        this.sprite.frame=1;
    }
    ,mouseOut: function(){
        this.sprite.frame=0;
    }
    ,destroy: function(){
        this.sprite.destroy();
        this.shape.destroy();
    }
})