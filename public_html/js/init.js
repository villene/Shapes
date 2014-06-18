var game, tileSize, grid, correctShape, shapes, currLvl, levelData, currRound;
var colourArray = ['black', 'red', 'yellow'];
var gameWidth = CONFIG.gameWidth;
var gameHeight = CONFIG.gameHeight;

game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser'); //{preload: preload, create: create});

var boot_state = {
    preload: function(){
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.spritesheet('tile', 'assets/tile.png', 100, 100, 2);
        this.game.load.spritesheet('black', 'assets/black.png', 100, 100, 4);
        this.game.load.spritesheet('red', 'assets/red.png', 100, 100, 4);
        this.game.load.spritesheet('yellow', 'assets/yellow.png', 100, 100, 4);
        this.game.load.spritesheet('lvlbg', 'assets/lvlbg.png', 100, 100, 2);
        this.game.load.spritesheet('arrows', 'assets/arrows.png', 200, 252, 2);
        this.game.load.image('shapebg', 'assets/shapebg.png');
        
    }
    ,create: function(){
        this.game.state.start('levels');
    }
}

var main_state = {
    create: function(){
        //currLvl = CONFIG.levels[0];
        currRound=1;
        grid = new Grid(currLvl);
//        correctShape = new Shape();
        grid.showTiles(currLvl);
    }
}

var level_select = {
    create: function(){
        levelData = new levelList();
        
//        var nextPage = this.game.add.button(gameWidth-35, gameHeight-35, 'arrows', levelData.nextPage, levelData, 1, 1);
//        nextPage.width=70;
//        nextPage.height=70;
//        nextPage.anchor.setTo(0.5,0.5);
//        
//        var prevPage = this.game.add.button(35, gameHeight-35, 'arrows', levelData.prevPage, levelData, 0);
//        prevPage.width=70;
//        prevPage.height=70;
//        prevPage.anchor.setTo(0.5,0.5);
        
    }
}

game.state.add('boot', boot_state);
game.state.add('levels', level_select);
game.state.add('main', main_state);
game.state.start('boot');