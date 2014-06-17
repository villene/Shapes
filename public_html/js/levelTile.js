var LevelTile = Class.extend({
    init: function(x,y,tileSize, level){
        this.draw(x,y,tileSize, level);
    }
    ,draw: function(x,y,tileSize, level){
        this.level = level;
        this.sprite = game.add.sprite(x, y, 'lvlbg');
        this.sprite.frame=0;
        this.sprite.height=tileSize;
        this.sprite.width=tileSize;        
        this.sprite.inputEnabled = true;
        this.sprite.events.onInputOver.add(this.mouseOver, this);
        this.sprite.events.onInputOut.add(this.mouseOut, this);
        this.sprite.events.onInputDown.add(this.startGame, this);
        
        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        this.text = game.add.text(this.sprite.x+tileSize/2, this.sprite.y+tileSize/2, level+1, style);
        this.text.anchor.set(0.5);
//        levelData.group.add(this.sprite);
//        levelData.group.add(this.text);
        
    }
    ,mouseOver: function(){
        this.sprite.frame=1;
    }
    ,mouseOut: function(){
        this.sprite.frame=0;
    }
    ,startGame: function(){
        currLvl = CONFIG.levels[this.level];
        levelData.destroy();
        game.state.start('main');
    }
    ,destroy: function(){
        this.sprite.destroy();
    }
})