var Tile = Class.extend({
    init: function(x,y){
        console.log(x,y);
        this.showed=false;
        this.draw(x,y);
    }
    
    ,draw: function(x,y){
        this.sprite = game.add.sprite(x, y, 'tile');
        this.sprite.frame=0;
        this.sprite.height=tileSize;
        this.sprite.width=tileSize;        
//        this.sprite.inputEnabled = true;
//        this.sprite.events.onInputOver.add(this.mouseOver, this);
//        this.sprite.events.onInputOut.add(this.mouseOut, this);
//        this.sprite.events.onInputDown.add(this.correctCheck, this);
        this.assignShape(x, y);
    }
    ,enableInput: function(){
        this.sprite.inputEnabled = true;
        this.sprite.events.onInputOver.add(this.mouseOver, this);
        this.sprite.events.onInputOut.add(this.mouseOut, this);
        this.sprite.events.onInputDown.add(this.correctCheck, this);
    }
    
    ,assignShape: function(x,y){                
        this.shape = game.add.sprite(x, y, colourArray[gameColours[shapes.list[0].shapeCol]]);    
        this.shape.frame=shapes.list[0].shapeFrame;
        this.shape.height=tileSize;
        this.shape.width = tileSize;
        this.shape.alpha = 0;
        shapes.list.splice(0,1);
    }
    ,show: function(){
        console.log();
        this.shape.alpha=1;
        game.time.events.add(currLvl.showTime-100, this.hide, this);
        console.log('yay! ' + this.shape.frame);
    }
    ,hide: function(){
        this.shape.alpha=0;
    }
    
    ,correctCheck: function(){
        this.show();
        if (this.shape.frame===correctShape.group.children[1].frame && this.shape.key===correctShape.group.children[1].key)
            {
                correctShape.hide();                
                grid.HUD.timer.stop();
                currRound++;
                grid.destroy();
                if (currRound<=3) {
                    grid = new Grid(currLvl);                    
                    grid.showTiles(currLvl);
                }
                else game.state.start('levels');
            }
        else{
            grid.HUD.updateTries();
            if (grid.HUD.tries===0) {
                grid.destroy();                
                game.state.start('levels');
            }
        }
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