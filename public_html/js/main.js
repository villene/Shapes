var main_state = Class.extend({
    preload: function(){
        this.game.stage.backgroundColor = '#71c5cf';
    }
    
    ,draw: function(){
        var line = this.game.add.graphics(80, 0);
                this.line.lineStyle(2, 'white', 1);
                 this.line.moveTo(80, 0);
                 this.line.lineTo(80, 20);
                 this.line.endFill();
    }
})