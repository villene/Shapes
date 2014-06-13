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
    }
    ,mouseOver: function(){
        this.sprite.frame=1;
    }
    ,mouseOut: function(){
        this.sprite.frame=0;
    }
    ,destroy: function(){
        this.sprite.destroy();
    }
})