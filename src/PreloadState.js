PreloadState = function (game) {

};




PreloadState.prototype = {

    preload: function () {

        this.game.load.onFileComplete.add(this.fileComplete, this);



        this.loadBack = this.game.add.image(GAME_WIDTH/2,GAME_HEIGHT/2,"back_loading");
        this.loadBack.anchor.set(0.5,0.5);
        this.loadBack.scale.set(GAME_WIDTH/540,GAME_HEIGHT/960);
        this.loadText = this.game.add.text(GAME_WIDTH/2,GAME_HEIGHT*0.7,"0%", { font: "100px", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });
        this.loadText.anchor.set(0.5,0.5);


        this.game.scale.setUserScale(1, 1);

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;


        this.preloadText = game.add.text(GAME_WIDTH, GAME_HEIGHT, "a", { font: "40px robotoB", fill: "#FFEEDE", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });

        this.preloadText = game.add.text(GAME_WIDTH, GAME_HEIGHT, "a", { font: "40px robotoM", fill: "#FFEEDE", align: "center", boundsAlignH: "center", boundsAlignV: "middle" });


        for (let i=0;i<5;i++)
        {

            game.load.image('tutorial'+(i+1), 'assets/tutorial'+(i+1)+'.png');
        }

        for (let i=0;i<8;i++)
        {
            
            game.load.image('math'+(i+1), 'assets/math'+(i+1)+'.png');
        }

        game.load.image('button_start','assets/button_start.png');
        game.load.image('button_next','assets/button_next.png');

        game.load.spritesheet('circle_small', 'assets/circle_small.png',90/2,45);

        CATEGORIES.forEach(function(e){

            for (let i=0;i<CATEGORIES_IMAGE_NUM;i++)
            {
                let idd = (i+1)+""
                game.load.image(e+idd,'assets/questions_compressed/'+e+idd+'.jpg');
            }
        }.bind(this));

        game.load.spritesheet('button_vote','assets/button_vote.png',310/2,155);
        game.load.image('bar_green','assets/bar_green.png');
        game.load.image('bar_grey','assets/bar_grey.png');
        game.load.image('button_help','assets/button_help.png');
        game.load.image('lock','assets/lock.png');
        game.load.image('heart','assets/heart.png');
        game.load.image('image_overlay','assets/image_overlay.png');


    }
    ,

    fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {

        this.loadBack.x = GAME_WIDTH/2;
        this.loadBack.y = GAME_HEIGHT/2;

        this.loadText.text = (progress) + '%'
        this.loadText.x = GAME_WIDTH/2;



    },

    create : function () {
        game.state.start('GameState');
    }
}